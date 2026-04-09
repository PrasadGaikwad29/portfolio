const resend = require("../config/mailer");

async function sendContact(req, res) {
  const { name, email, message } = req.body;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2>New Portfolio Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ default working sender
      to: process.env.EMAIL_TO,
      reply_to: email,
      subject: `Portfolio Contact from ${name}`,
      html: htmlContent,
    });

    console.log("✅ Email sent via Resend");
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ FULL ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}

module.exports = { sendContact };
