import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";


export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pool = getDbPool();
    if (pool) {
      const rows = await query<{
        id: string;
        order_number: string;
        items_json?: string;
      }>("SELECT * FROM orders WHERE id = ? OR order_number = ? LIMIT 1", [
        id,
        id,
      ]);
      if (rows && rows.length > 0) {
        const order = rows[0];
        let items = [];
        try {
          items =
            typeof order.items_json === "string"
              ? JSON.parse(order.items_json)
              : order.items_json || [];
        } catch {
          items = [];
        }
        return NextResponse.json({ success: true, data: { ...order, items } });
      }
    }
    return NextResponse.json(
      { success: false, message: "Order not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const validStatuses = ["new", "confirmed", "shipped", "delivered", "cancelled", "failed"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status value" },
        { status: 400 }
      );
    }

    const pool = getDbPool();
    if (pool) {
      await query("UPDATE orders SET status = ? WHERE id = ? OR order_number = ?", [
        status,
        id,
        id,
      ]);
    }

    return NextResponse.json({
      success: true,
      message: `Order status updated to ${status}`,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update order" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pool = getDbPool();
    if (pool) {
      await query("DELETE FROM orders WHERE id = ? OR order_number = ?", [id, id]);
    }

    return NextResponse.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete order" },
      { status: 500 }
    );
  }
}
