const express = require("express");
const bodyParser = require("body-parser")
const hb = require("express-handlebars");
const fs = require("fs");
const list = fs.readdirSync(__dirname + "/projects");
const nodemailer = require("nodemailer");
const path = require("path");

const secret = require("secrets");

const app = express();
const projectList = list.map(i => {
    const { name, desc } = require(__dirname + "/projects/" + i + "/info");
    return {
        i,
        name,
        desc
    };
});

 // View engine setup
app.engine("handlebars", hb());
app.set("view engine", "handlebars");


app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("projects"));


///////////////////////////////Xpress handlebars///////////////////

app.get("/", (req, res) => {
    // res.redirect("/projects");
    res.render("welcome", {
        layout: "main",
        projectList
    });
});

app.get("/projects", (req, res) => {
    res.render("projects", {
        layout: "main",
        projectList
    });
});

app.get("/projects/:projName/description", (req, res) => {
    let projName = req.params.projName;

    res.render("desc", {
        layout: "main",
        projectList,
        projName
    });
});


app.get("/aboutMe", (req, res) => {
    res.render("aboutMe", {
        layout: "main"
    })
})

app.get("/contactMe", (req, res) => {
    res.render("contactMe", {
        layout: "main"
    })
})


app.post("/send", (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${secret.email}`,
            pass: `${secret.pass}`
        }
    });
    const mailOptions = {
        from: `${req.body.email}`,
        to: `${secret.email}`,
        subject: 'Subject of your email',
        html: output
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
    res.render("contactMe", {msg: "Email has been sent!"})
})

app.get("*", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080, () => console.log("listening"));
