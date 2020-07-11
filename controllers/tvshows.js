const mongoose = require('mogoose');
const TVshow = mongoose.model('TVShow');

//GET - RETURN ALL SHOWS IN THE DB

exports.findAllTVShows = (req,res)=>{
    TVshow.findById(req.params.id, (err, tvshows)=>{
        if(err) res.send(500,err.message);

        console.log('GET /tvshows')
            res.status(200).jsponp(tvshows);
    });
//POST - Insert a new TVShow in the DB
exports.addTVShow = (req, res)=> {
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
        title:    req.body.title,
        year:     req.body.year,
        country:  req.body.country,
        poster:   req.body.poster,
        seasons:  req.body.seasons,
        genre:    req.body.genre,
        summary:  req.body.summary
    });

    tvshow.save((err, tvshow) => {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(tvshow);
    });
};

exports.updateTVShow = function(req, res) {
        TVShow.findById(req.params.id, function(err, tvshow) {
            tvshow.title   = req.body.petId;
            tvshow.year    = req.body.year;
            tvshow.country = req.body.country;
            tvshow.poster  = req.body.poster;
            tvshow.seasons = req.body.seasons;
            tvshow.genre   = req.body.genre;
            tvshow.summary = req.body.summary;
    
            tvshow.save(function(err) {
                if(err) return res.status(500).send(err.message);
          res.status(200).jsonp(tvshow);
           });
        });
    };
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
        TVShow.findById(req.params.id, function(err, tvshow) {
            tvshow.remove(function(err) {
                if(err) return res.status(500).send(err.message);
          res.status(200).send();
            })
        });
    };