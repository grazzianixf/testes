var utm = require('utm')


const wgs84GeoLatitude = -3.86644492196
const wgs84GeoLongitude = -38.6007103297
const wgs84UTMCoordinateX = 544330.848481
const wgs84UTMCoordinateY = 9572624.74009

const zoneNumber = 24 //Ceará

const objUtm = utm.fromLatLon(wgs84GeoLatitude, wgs84GeoLongitude)

console.log('UTM: ', objUtm)

const objLatLon = utm.toLatLon(wgs84UTMCoordinateX, wgs84UTMCoordinateY, zoneNumber, "M")

console.log('LatLon: ', objLatLon)