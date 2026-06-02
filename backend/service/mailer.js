import nodemailer from "nodemailer";

// Diagnostic checks to help debug missing variables in Render Logs
if (!process.env.EMAIL_USER) {
    console.error("mailer.js error: EMAIL_USER environment variable is missing!");
}
if (!process.env.EMAIL_PASS) {
    console.error("mailer.js error: EMAIL_PASS environment variable is missing!");
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    family: 4 // Force IPv4 — Render free tier does not support outbound IPv6
});

transporter.verify((err) => {
    if (err){
        console.error("Mailer setup verification failed:", err);
    }
  else
    console.log(
        "Mailer Connected"
    );
});

export default transporter;