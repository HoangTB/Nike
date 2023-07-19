const nodemailer = require('nodemailer');
const mailerConfig = require('../../configs/mailler.config');

// Cấu hình transporter
const transporter = nodemailer.createTransport({
  service: mailerConfig.email.service,
  auth: {
    user: mailerConfig.email.user,
    pass: mailerConfig.email.password,
  },
});

// Hàm gửi email thông báo cho người dùng
const sendRegistrationEmail = async (data) => {
  console.log(data);
  // Nội dung email
  const mailOptions = {
    from: mailerConfig.email.user,
    to: data.email,
    subject: 'Registration Successful',
    html: `
      <html>
        <head>
          <style>
            /* CSS styles */
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              text-align: center;

            }
            h1 {
              color: #333333;
            }
           
            p{
              color: grey;
            }
          </style>
        </head>
        <body>
             <img
              src="https://firebasestorage.googleapis.com/v0/b/projectshoes-cf747.appspot.com/o/673483.png?alt=media&token=fb222f9d-7894-4adb-80c8-10729ef5b496"
              alt=""
              style="width:100px"
            />
          <h1>Congratulations! ${data?.email} has successfully made a purchase !</h1>
          <p>Full Name: ${data?.fullName}</p>
          <p>Email: ${data?.email}</p>
          <p>Address: ${data?.phone}</p>
        </body>
      </html>
    `,
  };

  // Gửi email
  await transporter.sendMail(mailOptions);
};

module.exports = sendRegistrationEmail;
