const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const url = `http://localhost:${port}`;

app.use('/static', express.static('node_modules/@fortawesome/fontawesome-free'));

// Public Folder
app.use(express.static(path.join(__dirname, '/public/assets')))

// View Engine: EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Post Method
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render("home.ejs", {url});
})
app.get("/login", (req, res) => {
  res.render("login.ejs", {url});
})
app.get("/signin", (req, res) => {
  res.render("register.ejs", {url});
})
app.get("/dashboard", (req, res) => {
  res.render("user_dashboard.ejs", {url});
})
app.get("/360/home_admin/admin", (req, res) => {
  res.render("admin_login_dashbord.ejs", {url});
})
app.get("/error", (req, res) => {
  res.render("error_404_page.ejs", {url});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})