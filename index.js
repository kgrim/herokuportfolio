const express = require("express");
const bodyParser = require("body-parser")
const hb = require("express-handlebars");
const fs = require("fs");
const list = fs.readdirSync(__dirname + "/projects");
const finalYear = fs.readdirSync(__dirname + "/public/artsPortfolio/final");
const firstHalfSecond = fs.readdirSync(__dirname + "/public/artsPortfolio/firstHalfSecond");
const secondHalfSecond = fs.readdirSync(__dirname + "/public/artsPortfolio/secondHalfSecond");
const firstYear = fs.readdirSync(__dirname + "/public/artsPortfolio/firstYear");

let secretEmail;
let secretPass;
if (process.env.email) {
    secretEmail = process.env.email;
    secretPass = process.env.pass;
} else {
    const secret = require("./secrets");
    secretEmail = `${secret.email}`;
    secretPass = `${secret.pass}`;
}

const app = express();
const projectList = list.map(i => {
    const { name, tech, desc, web } = require(__dirname + "/projects/" + i + "/info");
    return {
        i,
        name,
        tech,
        desc,
        web
    };
});

const bigProjectList = require(__dirname + "/public/bigProjectList/bigProjectList.json")

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
        projectList,
        bigProjectList
    });
});

app.get("/projects/:projName/description", (req, res) => {
    let projName = req.params.projName;
    let tempProjList;
    let test = projectList.map(x => {
        if (projName == x.i) {
            tempProjList = x;
            }
        });
        res.render("desc", {
            layout: "main",
            tempProjList
        });

});
app.get("/projects/:projId/bigProjectdescription", (req, res) => {
    let projId = req.params.projId;
    let tempBigProjList;
    for (let key in bigProjectList) {
        if (bigProjectList[key].id == projId) {
            tempBigProjList = bigProjectList[key];
        }
    }
        res.render("bigProjDesc", {
            layout: "main",
            tempBigProjList
        });
});

app.get("/artsPortfolio", (req, res) => {
        res.render("artsPortfolio", {
            layout: "main",
            finalYear,
            firstHalfSecond,
            secondHalfSecond,
            firstYear
        });
});


app.get("/aboutMe", (req, res) => {
    res.render("aboutMe", {
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
            user: `${secretEmail}`,
            pass: `${secretPass}`
        }
    });
    const mailOptions = {
        from: `${req.body.email}`,
        to: `${secretEmail}`,
        subject: 'Subject of your email',
        html: output
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
    res.render("aboutMe", {msg: "Thank you, the Email is on it's way to me!"})
})

app.get("*", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080, () => console.log("listening"));
