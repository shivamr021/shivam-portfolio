import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extract the JSON payload from the frontend
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required parameters.' }, 
        { status: 400 }
      );
    }

    // Fire the email via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Architecture <onboarding@resend.dev>', // Resend's testing domain
      to: ['shivamrathod145@gmail.com'], // Routing straight to you
      subject: `New Comm Sequence from ${name}`,
      replyTo: email, // Lets you hit "Reply" in Gmail and it goes to the sender
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #0b0f1c; color: #ffffff;">
          <h2 style="color: #34d399; border-bottom: 1px solid #333; padding-bottom: 10px;">New System Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; border-left: 3px solid #8A2BE2; background-color: rgba(255,255,255,0.05);">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Transmission failed:", error);
    return NextResponse.json(
      { error: 'Internal system failure.' }, 
      { status: 500 }
    );
  }
}