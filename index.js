const express = require('express');
const url=require('url');
const app = express();
const port = 8000;
app.get("/", function (req, res) {
  console.count('homepage');
  res.sendFile('/home/asd/myapp/index.html', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
app.get("/login", (req, res) => {
  console.count('login');
  res.sendFile('/home/asd/myapp/Login.html', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
app.get("/signup", (req, res) => {
  console.count('signup');
  res.sendFile('/home/asd/myapp/signup.html', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
app.get("/forget", (req, res) => {
  console.count('forget');
  res.sendFile('/home/asd/myapp/forget.html', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
app.get("/forget/forgetdone", (req, res) => {
  console.count('forgetdone');
  var query=url.parse(req.url,true).query;
  res.writeHead(200,{
    'Content-Type':'plain-text'
  });
  res.end(`Welcome ${query.name} Back, Your Password is Changed!! :-)`);
});
app.get("/login/submit", (req, res) => {
  console.count('login done');
  var query=url.parse(req.url,true).query;
  res.writeHead(200,{
    'Content-Type':'plain-text'
  });
  res.end(`Welcome ${query.uname} `);
});
app.get("/signup/submit", (req, res) => {
  console.count('signup done');
  var query=url.parse(req.url,true).query;
  res.writeHead(200,{
    'Content-Type':'plain-text'
  });
  res.end(`Welcome ${query.uname} `);
});
app.listen(port, () => console.log(`listening on port:${port}`));