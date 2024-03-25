const dotenv = require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT,
    GMAIL:process.env.GMAIL,
    GMAIL_PASS:process.env.GMAIL_PASS,
    BOOKING_API:process.env.BOOKING_API,
    USER_API:process.env.USER_API
}