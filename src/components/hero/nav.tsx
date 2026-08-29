"use client";

import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";
import { AnnouncementBar } from "@/components/hero/announcement-bar";

export function Nav() {
  return (
    <>
      <AnnouncementBar />
      <DesktopNav />
      <MobileNav />
    </>
  );
}
