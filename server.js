const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + '/dist/angular-pc-gamer-shop'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(_dirname + '/dist/angular-pc-gamer-shop/index.html'));});
    pp.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
      });