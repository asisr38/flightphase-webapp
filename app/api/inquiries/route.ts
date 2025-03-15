import { NextRequest, NextResponse } from "next/server"

// This would typically connect to a database like MongoDB, PostgreSQL, etc.
// For now, we'll simulate storage with an in-memory array
let inquiries: any[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" }, 
        { status: 400 }
      )
    }
    
    // Create inquiry record
    const newInquiry = {
      id: Math.random().toString(36).substring(2, 15),
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message || null,
      programType: data.programType || "General",
      createdAt: new Date().toISOString(),
    }
    
    // In a real application, save to database here
    inquiries.push(newInquiry)
    
    // In a real application, you might send an email notification here
    
    return NextResponse.json({ 
      success: true,
      inquiry: newInquiry 
    }, { status: 201 })
  } catch (error) {
    console.error("Error creating inquiry:", error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // In a real application, fetch from database
    return NextResponse.json({ 
      inquiries 
    }, { status: 200 })
  } catch (error) {
    console.error("Error fetching inquiries:", error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
} 