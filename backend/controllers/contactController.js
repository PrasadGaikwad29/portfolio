const transporter = require('../config/mailer')

// POST /api/contact
async function sendContact(req, res) {
  const { name, email, message } = req.body

  // HTML email template
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
      <h2 style="color: #E50914; margin-bottom: 4px;">New Portfolio Contact</h2>
      <p style="color: #666; font-size: 14px; margin-bottom: 24px;">Someone reached out via your portfolio.</p>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #333; width: 100px;">Name</td>
          <td style="padding: 10px 0; color: #555;">${name}</td>
        </tr>
        <tr style="border-top: 1px solid #e0e0e0;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Email</td>
          <td style="padding: 10px 0;">
            <a href="mailto:${email}" style="color: #E50914; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr style="border-top: 1px solid #e0e0e0;">
          <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message</td>
          <td style="padding: 10px 0; color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
        </tr>
      </table>

      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
        Sent from your portfolio contact form · ${new Date().toLocaleString()}
      </div>
    </div>
  `

  // Mail options — sent TO you, reply-to is the sender
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `📬 Portfolio Contact from ${name}`,
    html: htmlContent,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`, // Plain text fallback
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`✅ Contact email sent from ${email}`)
    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('❌ Failed to send email:', error.message)
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' })
  }
}

module.exports = { sendContact }
