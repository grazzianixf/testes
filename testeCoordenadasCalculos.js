var geolib = require('geolib')

const objLatLongToSearch = {latitude: 51.525, longitude: 7.4575}
const objLatLongCenter = {latitude: 51.5175, longitude: 7.4678}
const radius = 50 // 5km

const isPointInside = geolib.isPointInCircle(objLatLongToSearch, objLatLongCenter, radius)

console.log(isPointInside)