import dotenv from "dotenv";
import Brevo from "@getbrevo/brevo";

dotenv.config();

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.authentications["apiKey"].apiKey = process.env.BREVO_API_KEY;

const sendOTPByEmail = async (email, otp) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your OTP Code</title>
        <style>
          .email-container { max-width:600px; margin:0 auto; font-family:Arial, sans-serif; padding:20px; background-color:#f9f9f9; }
          .header { text-align:center; padding:20px; background-color:#4a90e2; color:white; border-radius:8px 8px 0 0; }
          .content { background-color:white; padding:30px; border-radius:0 0 8px 8px; box-shadow:0 2px 4px rgba(0,0,0,0.1); }
          .otp-box { background-color:#f5f5f5; padding:15px; margin:20px 0; border-radius:4px; text-align:center; font-size:24px; letter-spacing:5px; font-weight:bold; color:#333; }
          .footer { text-align:center; margin-top:20px; color:#666; font-size:12px; }
          .warning { color:#e74c3c; font-size:13px; margin-top:15px; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header"><h1>Your OTP Code</h1></div>
          <div class="content">
            <p>Hello,</p>
            <p>Here’s a little magic from <strong>AI_Morph</strong> for you:</p>
            <div class="otp-box">${otp}</div>
            <p>This OTP will expire in 10 minutes.</p>
            <div class="warning">⚠ Never share this OTP with anyone. Our team will never ask for it.</div>
          </div>
          <div class="footer">
            <p>If you did not request this OTP, please ignore this email or contact support.</p>
            <p>&copy; ${new Date().getFullYear()} AI_Morph. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const subject = "Your One-Time Password (OTP) from chatty";

  const sendSmtpEmail = {
    sender: { name: "Chatty", email: process.env.GMAIL },
    to: [{ email }],
    subject,
    htmlContent: htmlContent,
    textContent: `Your OTP is ${otp}. It will expire in 10 minutes.`,
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully via Brevo API!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export default sendOTPByEmail;
