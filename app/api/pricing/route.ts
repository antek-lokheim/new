import { NextResponse } from "next/server"
import { pricingPlans } from "@/lib/data"

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return NextResponse.json(pricingPlans)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch pricing" }, { status: 500 })
  }
}
