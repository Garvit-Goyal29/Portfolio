import transporter from "../service/mailer.js";
async function handleContactFromController(req, res) {
    try {
        const { name, email, sub, mess } = req.body;
        const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "EMAIL_MAIN"];
        const missingEnv = requiredEnv.filter((key) => !process.env[key]);

        if (missingEnv.length > 0) {
            console.error("Missing email environment variables:", missingEnv.join(", "));
            return res.status(500).json({
                success: false,
                message: "Email service is not configured on the server"
            });
        }

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_MAIN,
            subject: sub ? `Contact Form: ${sub}` : "Contact Form",
            html: `
            <h2>New Contact</h2>
            <p>Name:${name}</p>
            <p>Email:${email}</p>
            <p>Subject:${sub}</p>
            <p>Message:${mess}</p>`
        });
        res.status(200).json({
            success: true,
            message:
                "Mail Sent"
        });
    }
    catch (err) {
        console.error("Mailer Error in handleContactFromController:", err);
        res.status(500).json({
            success: false,
            message: err.message || "Mail Failed"
        });
    }

}
export default handleContactFromController;
