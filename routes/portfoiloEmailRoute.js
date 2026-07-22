// routes/emailRoutes.js
const express = require("express");
const { Resend } = require("resend");
require("dotenv").config();

const router = express.Router();

// Initialize Resend (Assumes dotenv.config() was called in index.js before importing this)
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  // Quick validation check
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update to your custom domain later!
      to: ["joelvijay319@gmail.com"], // 👈 PUT YOUR ACTUAL EMAIL HERE
      replyTo: email,
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#4f46e5;">You’ve got a new message! ✨</h2>
          <p>Someone reached out through your portfolio.</p>
          <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;" />
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color:#2563eb;">${email}</a></p>
          <p><strong>💬 Message:</strong></p>
          <blockquote style="margin: 12px 0; padding: 12px 16px; background: #f9fafb; border-left: 4px solid #4f46e5; color: #374151;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully 🎉",
    });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

module.exports = router;
