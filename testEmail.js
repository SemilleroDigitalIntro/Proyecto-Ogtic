// const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

// const userGmail = "nashlamissel27@gmail.com";
// const passAppGmail = "sfqe wuhl tacb pjwz";

// // Set up Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: userGmail,
//         pass: passAppGmail,
//     },
// });

// // Define a route for sending emails
// // Set up email options
// const mailOptions = {
//     from: userGmail,
//     to: userGmail,
//     subject: "Test Email",
//     text: "This is a test email from Node.js!",
// };

// // Send email
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("Email sent: " + info.response);
// });