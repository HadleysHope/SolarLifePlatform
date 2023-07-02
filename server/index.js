// Importing required modules and packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./db/connection");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const smtpTransport = require("nodemailer-smtp-transport");

// Establishing database connection
(async function () {
  await connect();
})();

const users = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const products = require("./routes/product.routes");
const categories = require("./routes/category.routes");

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use("/users", users);
app.use("/auth", auth);
app.use("/products", products);
app.use("/category", categories);

const resetTokens = {};


async function sendPasswordResetEmail(email, resetLink) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'watson8@ethereal.email',
          pass: 'Q4F4jCpuMvqBQja9SE'
      }
  });

    const mailOptions = {
      from: "Watson Rodriguez<sraw211@mywhitecliffe.com>",
      to: email,
      subject: "Password Reset",
      text: `Click the following link to reset your password: ${resetLink}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
  }
}


app.post("/auth/reset-password", async (req, res) => {
  const { email } = req.body;

  // Generate a unique reset token
  const resetToken = crypto.randomBytes(20).toString("hex");

  try {
    resetTokens[resetToken] = email;

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    await sendPasswordResetEmail(email, resetLink);

    res.json({ message: "Password reset email sent." });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    res.status(500).json({
      error: "An error occurred while sending the password reset email.",
    });
  }
});

app.listen(process.env.PORT || 3005, () => {
  console.log("Server running ok");
});
