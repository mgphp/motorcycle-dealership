const google = window.google;

export function getGeocode(address, callback) {
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      callback(results);
    }
  });
}

// export function geocodePostcode(postcode) {
//   let g_lat;
//   getGeocode(postcode, function (results) {
//     g_lat = results[0].geometry.location.lat();
//     var g_long = results[0].geometry.location.lng();
//     return g_lat;
//   });
//   console.log(g_lat);
// }
