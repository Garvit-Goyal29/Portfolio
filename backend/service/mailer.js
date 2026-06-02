import nodemailer from "nodemailer";

// Diagnostic checks to help debug missing variables in Render Logs
if (!process.env.EMAIL_USER) {
    console.error("mailer.js error: EMAIL_USER environment variable is missing!");
}
if (!process.env.EMAIL_PASS) {
    console.error("mailer.js error: EMAIL_PASS environment variable is missing!");
}

const smtpPort = Number(process.env.SMTP_PORT || 465);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    requireTLS: smtpPort !== 465,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
        rejectUnauthorized: false
    },
    family: 4
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
