import { NextResponse } from "next/server";
import * as z from "zod";

import { z } from "zod";
const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string().optional(),
  message: z.string(),
  caseType: z.string().optional(),
  source: z.string(),
  gotcha: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    const validatedData = formSchema.parse(body);

    // Honeypot check
    if (validatedData.gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // Here you would typically integrate with:
    // 1. Resend, SendGrid, or AWS SES for email
    // 2. A CRM like HubSpot or Salesforce
    // 3. A database like Postgres or MongoDB
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // console.log("Form submission received:", validatedData);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}