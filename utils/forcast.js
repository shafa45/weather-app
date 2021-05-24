const request = require('request')

const API_KEY = `4b2dfca5ef55d789d6d331358e74fc88`;
const forecast=(lon,lat,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lon,lat}`;
    request({url, json: true }, (err, {body}) => {
      if (err) {
        callback('Unable to Connect to Weather Service !',undefined);
      } else if (body.error) {
        callback('Cannot find the location',undefined);
      } else {
        callback(undefined,
          'It is currently ' +
            body.current.temperature +
            ' and it feels like ' +
            body.current.feelslike
        );
      }
    });
}

module.exports = forecast