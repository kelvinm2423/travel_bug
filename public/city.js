//   var info = {
//     summary: 'giohgiero'
//   };
//   var info2;

// $('.final').click(function(event) {
//     event.preventDefault();
//     var city = $('.city-select').val();
//     city = city.replace(/\s+/g, '-').toLowerCase();
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/',
//       type: 'GET'
//     }).done(function(data) {
//       console.log(data);
//     });
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/images/',
//       type: 'GET'
//     }).done(function(results) {
//       // console.log(results);
//         info = results;
//         console.log(info);
//     });
//   });

//   $('.final2').click(function(event) {
//     event.preventDefault();
//     var city2 = $('.city-select2').val();
//     city2 = city2.replace(/\s+/g, '-').toLowerCase();
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city2 + '/scores/',
//       type: 'GET'
//     }).done(function(data) {
//       console.log(data);
//     });
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city2 + '/images/',
//       type: 'GET'
//     }).done(function(data) {
//       console.log(data);
//         info2 = data;
//       // var info = response.results;
//     });
//   });
TeleportAutocomplete.init('.city-select').on('change', function(value) { console.log(value); });