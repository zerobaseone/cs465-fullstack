const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async (req, res) => {
    const q = await Model
        .find() // no filter, return all records
        .exec();    

        // uncomment following line to show results of query in console
        // console.log(q);

    if(!q)
    { // database returned no data
        return res
            .status(404) // 404 Not Found
            .json(err);
    } else {  // return resulting trip list
            return res
                .status(200) // 200 OK
                .json(q);
    }

}

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // no filter, return all records
        .exec();

        // uncomment following line to show results of query in console
        // console.log(q);

    if(!q)
    { // database returned no data
        return res
            .status(404) // 404 Not Found
            .json(err);
    } else {  // return resulting trip list
            return res
                .status(200) // 200 OK
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};  