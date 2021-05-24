const request = require('request');

const geoCode = require('./utils/geoCode')

const forecast = require('./utils/forcast')

const address = process.argv[2]


if(!address){
    console.log("Please provide an address!")
}
else{
    geoCode(address,(error,{lat,lon,location}={})=>{
        if(error){
            return console.log(error)
        }
        
    forecast(lon,lat,(error,forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
    
    })
}

