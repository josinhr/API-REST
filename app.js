var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Wordl!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', { useNewUrlParser: true , useUnifiedTopology: true}, (err, res) => {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  }
  );
});

const TVShowCtrl = require('./controllers/tvshows');

const tvshows = express.Router();

tvshows.route('/tvshows')
    .get(TVshowCtrl.findAllTvShows)
    .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);
