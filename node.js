// This function sends the user input through email
var nodemailer = require('nodemailer');

function sendEmail(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the message element by its id
    var message = document.getElementById("message");
    // Get the value of the message
    var value = message.value;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mridulsrivastava.vit2021@gmail.com',
          pass: 'dhdqljbkpvcgixkf'
        }
      });
      
      var mailOptions = {
        from: 'mridulsrivastava.vit2021@gmail.com',
        to: 'mridul.srivastava2021@vitstudent.ac.in',
        subject: 'Sending Email kjkkj using Node.js',
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }
  