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

async function main(Gmail) {
   console.log(Gmail);
    const info = await transporter.sendMail({
        from: Gmail,
        to: "sumanthkgs15050071@gmail.com", 

        subject: "no reply", 
        text: "your booking has been done ",
        // html body
    });
    console.log(info);
    
    
}
module.exports={main}