import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(
  {
    origin:["//https://final-portfolio-c7zy.vercel.app/"],
    methods:["POST,GET"],
    credentials:true
  }
));

// Serve the home page
app.get('/', (req, res) => {
  res.send("Assaladdm o alikum frfr");
});

// Handle the email sending
// app.post('/send-email', async (req, res) => {
//   const { email, subject, message } = req.body;

//   if (!email || !subject || !message) {
//     return res.status(400).send('All fields are required.');
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER, 
//       pass: process.env.EMAIL_PASS, // Use environment variable for password
//     },
//   });

//   const mailOptions = {
//     from: email, // The sender's email (the user's email)
//     to: process.env.EMAIL_USER, // Your email address
//     subject: `Contact Form: ${subject}`, 
//     text: `From: ${email}\n\n${message}`, 
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//     res.status(200).send('Your message has been sent successfully.');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Error sending email: ' + error.message);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
