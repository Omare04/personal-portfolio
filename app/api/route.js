import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();
    
    // Input validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email environment variables not set");
      return new Response(
        JSON.stringify({ message: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });
    
    // HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Portfolio Website Inquiry</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="font-size: 12px; color: #6b7280; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
          <p>This email was sent from your portfolio website contact form.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Inquiry from ${firstName} ${lastName}${phone ? ` (Phone: ${phone})` : ''}`,
      text: `Message from ${firstName} ${lastName} (${email})${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return a user-friendly error message
    return new Response(
      JSON.stringify({ 
        message: "Failed to send email",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}