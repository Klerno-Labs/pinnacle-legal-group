import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, caseType, message, _gotcha } = body;

    // Honeypot check for spam
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here using a service like Resend, SendGrid, or Nodemailer.
    // For this demo, we will simulate a successful API call after a delay.
    console.log("Received Contact Form Submission:", {
      name,
      email,
      phone,
      caseType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}