const axios = require('axios');

module.exports = {
    getSwimmerTimes: function(req, res, next){
        const url = 'https://api.svømmetider.dk/personlige-rekorder?swimmer_id=' + req.params.userId + '&token=5c3f1ed54c58adee4368121ec506442b';

        // Make a request for a user with a given ID
        axios.get(url)
        .then(function (response) {
            // handle success
            //console.log('type of response', typeof response);
            console.log('response.data', response.data[0]);
            res.events = response.data;
            //console.log('req.swimmerData', req.swimmerData);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            next();
        });
/*
        const requestOptions = {
            url: 'https://api.svømmetider.dk/personlige-rekorder?swimmer_id=' + req.params.userId + '&token=5c3f1ed54c58adee4368121ec506442b',
            method: 'GET',
          };
        
        request(
            requestOptions,
            (err, response, body) => {
                renderHomepage(req, res);
            }
        );
        next();
        */
    }
}
