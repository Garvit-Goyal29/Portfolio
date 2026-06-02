import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
transporter.verify((err) => {
    if (err){
        console.log(err);
    }
  else
    console.log(
        "Mailer Connected"
    );
});
export default transporter;