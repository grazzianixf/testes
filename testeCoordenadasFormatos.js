var utm = require('utm')


const wgs84GeoLatitude = -3.86644492196
const wgs84GeoLongitude = -38.6007103297
const wgs84UTMCoordinateX = 544330.848481
const wgs84UTMCoordinateY = 9572624.74009


const objUtm = utm.fromLatLon(wgs84GeoLatitude, wgs84GeoLongitude)

console.log('UTM from LatLon')
console.log(wgs84GeoLatitude, wgs84GeoLongitude)
console.log(objUtm)

console.log(' ')

const zoneNumber = 24 //Ceará
const zoneLetter = null
const northern = false
const objLatLon = utm.toLatLon(wgs84UTMCoordinateX, wgs84UTMCoordinateY, zoneNumber, zoneLetter, northern)

console.log('UTM to LatLon: ')
console.log(wgs84UTMCoordinateX, wgs84UTMCoordinateY)
console.log(objLatLon)