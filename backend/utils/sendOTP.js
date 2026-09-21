import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },

  family: 4,

  tls: {
    rejectUnauthorized: false
  }
});

// Test Gmail connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Gmail connection failed:");
    console.log(error);
  } else {
    console.log("✅ Gmail connection successful!");
  }
});

// Send OTP email
const sendOTP = async (email, otp) => {
  try {
    console.log("📧 Attempting to send OTP to:", email);
    console.log("🔢 OTP:", otp);

    const mailOptions = {
      from: `"CraveGo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "CraveGo - Your OTP Verification Code",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: auto;
          padding: 20px;
        ">

          <h2 style="color: #ff3f78;">
            CraveGo
          </h2>

          <p>Hello,</p>

          <p>
            Thank you for registering with CraveGo.
            Your verification OTP is:
          </p>

          <h1 style="
            letter-spacing: 8px;
            color: #ff3f78;
            text-align: center;
          ">
            ${otp}
          </h1>

          <p>
            This OTP is valid for <strong>5 minutes</strong>.
          </p>

          <p>
            If you did not request this code, please ignore this email.
          </p>

          <p>
            Regards,<br>
            <strong>CraveGo Team</strong>
          </p>

        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ EMAIL SENT");
    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);

    return info;

  } catch (error) {
    console.log("❌ EMAIL SENDING FAILED");
    console.log(error);

    throw error;
  }
};

export default sendOTP;