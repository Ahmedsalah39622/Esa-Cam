import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

import { DEFAULT_HOMEPAGE_CONTENT, HomepageContentState } from "@/data/homepage-content";

// In-memory fallback storage
let inMemoryContent: HomepageContentState = { ...DEFAULT_HOMEPAGE_CONTENT };

interface ContentRow {
  section_key: string;
  content_json: string | object;
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (pool) {
      try {
        // Ensure table exists
        await query(`
          CREATE TABLE IF NOT EXISTS homepage_sections (
            section_key VARCHAR(100) PRIMARY KEY,
            section_name VARCHAR(255) NOT NULL,
            content_json JSON NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);

        const rows = await query<ContentRow>("SELECT section_key, content_json FROM homepage_sections");

        if (rows.length > 0) {
          const loadedContent: Partial<HomepageContentState> = {};
          for (const row of rows) {
            const key = row.section_key as keyof HomepageContentState;
            const parsed = typeof row.content_json === "string" ? JSON.parse(row.content_json) : row.content_json;
            loadedContent[key] = parsed;
          }

          const merged: HomepageContentState = {
            ...DEFAULT_HOMEPAGE_CONTENT,
            ...loadedContent,
          };
          return NextResponse.json({ success: true, source: "database", data: merged });
        }
      } catch (dbErr) {
        console.error("Database query for homepage content error, using memory/defaults:", dbErr);
      }
    }

    return NextResponse.json({ success: true, source: "fallback", data: inMemoryContent });
  } catch (error) {
    console.error("GET /api/content error:", error);
    return NextResponse.json({ success: true, source: "default", data: DEFAULT_HOMEPAGE_CONTENT });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sectionKey, content, allSections } = body;

    if (allSections) {
      inMemoryContent = { ...inMemoryContent, ...allSections };

      const pool = getDbPool();
      if (pool) {
        try {
          await query(`
            CREATE TABLE IF NOT EXISTS homepage_sections (
              section_key VARCHAR(100) PRIMARY KEY,
              section_name VARCHAR(255) NOT NULL,
              content_json JSON NOT NULL,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          `);

          for (const [key, val] of Object.entries(allSections)) {
            await query(
              `INSERT INTO homepage_sections (section_key, section_name, content_json)
               VALUES (?, ?, ?)
               ON DUPLICATE KEY UPDATE content_json = VALUES(content_json), updated_at = CURRENT_TIMESTAMP`,
              [key, key, JSON.stringify(val)]
            );
          }
        } catch (dbErr) {
          console.error("Database save allSections error:", dbErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: "All homepage sections saved successfully",
        data: inMemoryContent,
      });
    }

    if (sectionKey && content) {
      inMemoryContent = {
        ...inMemoryContent,
        [sectionKey]: content,
      };

      const pool = getDbPool();
      if (pool) {
        try {
          await query(`
            CREATE TABLE IF NOT EXISTS homepage_sections (
              section_key VARCHAR(100) PRIMARY KEY,
              section_name VARCHAR(255) NOT NULL,
              content_json JSON NOT NULL,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          `);

          await query(
            `INSERT INTO homepage_sections (section_key, section_name, content_json)
             VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE content_json = VALUES(content_json), updated_at = CURRENT_TIMESTAMP`,
            [sectionKey, sectionKey, JSON.stringify(content)]
          );
        } catch (dbErr) {
          console.error(`Database save section [${sectionKey}] error:`, dbErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: `Section [${sectionKey}] updated successfully`,
        data: inMemoryContent,
      });
    }

    return NextResponse.json(
      { success: false, message: "Missing sectionKey or content payload" },
      { status: 400 }
    );
  } catch (error) {
    console.error("POST /api/content error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update homepage content" },
      { status: 500 }
    );
  }
}
