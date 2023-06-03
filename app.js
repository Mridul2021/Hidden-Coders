const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      nodemailer = require('nodemailer');

// view engine setup
app.set('view engine', 'ejs');

// public directory setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// index route
app.get("/", (req, res) => {
    res.redirect("/contact");
});

// render contact form
app.get("/contact", (req, res) => {
    res.render("contact");
});

// post route
app.post("/contact", (req, res) => {
    const output = `
        <p>Hello,<p>
        <p>You have a new complaint</p>
        <h3>Contact Details</h3>
        <ul>  
            <li>Name: ${req.body.firstname + " " + req.body.lastname}</li>
            <li>Registration Number: ${req.body.phone}</li>
            <li>Block: ${req.body.email}</li>
            <li>Room Number: ${req.body.subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `
    
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: 'true',
        auth: {
            user: 'mridulsrivastava.vit2021@gmail.com', // could use generated ethereal user
            pass: 'dhdqljbkpvcgixkf'  // could use generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
      from: '"Hostel Student" <node.mailer.smtp@gmail.com>', // sender address
      to: 'mridul.srivastava2021@vitstudent.ac.in', // list of receivers
      subject: 'Complaint from hostel studdent.', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
          res.redirect('/contact');
    });
});


//  starts a UNIX socket and listens for connections on the given path
app.listen(3047, () => {
    console.log("Servering requests on localhost:3002...");
});

