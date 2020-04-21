const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ2FiZXJjaCIsImEiOiJjazd0aHRjY2YxMDVyM2ZyMm0wYmR2YmFtIn0.-LaKKjq6Z_ual0t8sAZqlA&limit=1`

    request({ url, json: true }, (error, {body}={}) => {
        if (error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to locate. Please try again with different input.', undefined)
        }
        else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;