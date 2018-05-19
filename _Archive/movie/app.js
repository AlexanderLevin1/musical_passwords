var express = require("express");
var app = express();
const path = require('path');
var request = require('request');

const nunjucks = require('nunjucks');
nunjucks.configure({ noCache: true });
app.use(require('body-parser').urlencoded());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))

app.use((req, res, next) => {
    res.locals.path = req.url;
    next();
});

app.get("/", (req, res, next) => {
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render('index', {data: data})
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`** listening on port ${port} **`)
});