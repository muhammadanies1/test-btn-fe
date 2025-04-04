import { NextResponse } from "next/server";

import products from "@/mocks/product";

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
