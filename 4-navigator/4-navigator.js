// 4-navigator
let addressLat = 10;
let addressLong = 5;
let positionLat = 7;
let positionLong = 8;

let result = Math.sqrt(((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2))
console.log(result)