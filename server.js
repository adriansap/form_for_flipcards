var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
var path = require("path")
//middleware
// // Serve static content for the app from the "public" directory in the application directory.
// app.use('/public/assets/css', express.static(__dirname + public/assets/css'));
// app.use(express.static('/'))
// app.use('/img', express.static(path.join(__dirname, 'public/assets/img')));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./submitController");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
