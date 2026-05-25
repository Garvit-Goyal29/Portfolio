import transporter from "../service/mailer.js";
async function handleContactFromController(req, res) {
    try {
        const { name, email, sub, mess } = req.body;
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_MAIN,
            subject: "Contact Form",
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
        console.log(err);
        res.status(500).json({
            success: false,
            message:
                "Mail Failed"
        });
    }

}
export default handleContactFromController;