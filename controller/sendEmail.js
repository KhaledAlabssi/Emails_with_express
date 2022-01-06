import nodemailer from "nodemailer";
import sgMail from '@sendgrid/mail'

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "khaled.absi5@gmail.com", // Change to your recipient
      from: "khaled85de@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    const info = await sgMail.send(msg)
    res.json(info)




//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: process.env.E_HOST,
//     port: process.env.E_PORT,
//     auth: {
//       user: process.env.E_USER,
//       pass: process.env.E_PASS,
//     },
//   });
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <info@amazon.de>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     // text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   res.json(info);
};

export default sendEmail;
