import { NextResponse } from "next/server"
import { features } from "@/lib/data"

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return NextResponse.json(features)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch features" }, { status: 500 })
  }
}
