const nodemailer = require("nodemailer");
require('dotenv').config(); 

async function main(userEmail) {
    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: userEmail,
        subject: "Registro completado ✔",
        text: "Hello world?",
        html: "<b>Gracias por registrarte a la pagina web</b>",
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
  main,
};

