const {GMAIL,GMAIL_PASS} = require('./server')
console.log(GMAIL,GMAIL_PASS);
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    // Use `true` for port 465, `false` for all other ports
    service:'Gmail',
    auth: {
      user: GMAIL,
      pass: GMAIL_PASS,
    },
});

async function main(Gmail,recipent) {
   
    const info = await transporter.sendMail({
        from: Gmail,
        to:recipent, 

        subject: "no reply", 
        text: "your booking has been done but through rabbitmq now with the server",
        // html body
    });
    console.log(info);
    
    
}
module.exports={main}