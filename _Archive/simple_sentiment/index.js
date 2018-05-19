const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, './index.html'))
// }
// );

app.get('/',
  function (req, res) {
    var response = "<HEAD>" +
      "<title> Sentiment Analysis</title>\n" +
      "</HEAD>\n" +
      "<BODY>\n" +
      "<P>\n" +
      "Welcome Sentiment Analysis app. " +
      "What phrase would you like to analzye?\n" +
      "</P>\n" +
      "<FORM action=\"/\" method=\"get\">\n" +
      "<P>\n" +
      "Enter a phrase to evaluate: <INPUT type=\"text\" name=\"phrase\"><BR>\n" +
      "<INPUT type=\"submit\" value=\"Send\">\n" +
      "</P>\n" +
      "</FORM>\n" +
      "</BODY>";
    var phrase = req.query.phrase;
    if (!phrase) {
      res.send(response);
    } else {
      sentiment(phrase, function (err, result) {
        response = 'sentiment(' + phrase + ') === ' + result.score;
        res.send(response);
      });
    }
  });


app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).send(err)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port of call: ${port}`))