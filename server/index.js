const express = require("express");
// const session = require("express-session");
// const FileStore = require("session-file-store")(session);
// const passport = require("passport");
const bodyParser = require("body-parser");
const config = require("./config/server-data");
const app = express();
const port = config.port||8000;
// const path = require("path");
const mongoose = require("mongoose");
const server = require('http').Server(app);
cookieParser = require('cookie-parser')
app.use(cookieParser(config.secret))


// io = require("socket.io")(server);

// require("./config/passport");
// require("./config/socket");

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("MongoDb error:" + err));


app
// .use(express.static("front-end-delete"))
.use(express.json())
.use(express.urlencoded({ extended: false }))
// .use(
//   session({
//     secret: config.secret,
//     store: new FileStore(),
//     cookie: {
//       path: "/",
//       httpOnly: true,
//       maxAge: 60 * 60 * 1000,
//     },
//     resave: false,
//     saveUninitialized: false,
//   })
// )
// .use(express.static(path.join(__dirname, "front-end-delete")))
// .use(passport.initialize())
// .use(passport.session())
.use(bodyParser.json())
.use('/api',require('./routes/api'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`));