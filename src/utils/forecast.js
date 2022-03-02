const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a86e5def85510a9d7df985c209c457bc&query=' + lat + ',' + long + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather servive!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined
            )
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Humidity is ${body.current.humidity}.`)
        }
    })
}

module.exports = forecast
