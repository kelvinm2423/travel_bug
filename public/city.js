//   var info = {
//     summary: 'giohgiero'
//   };
//   var info2;


$('.final').on('click', function() {
  var city = $('.city-select').val();
  city = city.replace(/\s+/g, '-').toLowerCase();
  // console.log(graphCity);

  $.ajax({
    url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/',
    type: 'GET'
  }).done(function(data) {
    console.log(data);
    var ctx = document.getElementById('myChart').getContext('2d');

    ctx.canvas.width = 300;
    ctx.canvas.height = 300;

    var myBarChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["Cost of Living", "Safety", "Housing", "Healthcare", "Education", "Taxation", "Commute Times"],
        datasets: [{
          label: city,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [data.categories[0].score_out_of_10, data.categories[7].score_out_of_10, data.categories[0].score_out_of_10, data.categories[8].score_out_of_10, data.categories[9].score_out_of_10, data.categories[12].score_out_of_10, data.categories[5].score_out_of_10],
        }]
      },
      options: {}
    });
  });
  // mainThis.setState({info: data});
});

$('.final2').on('click', function() {
  var city = $('.city-select2').val();
  city = city.replace(/\s+/g, '-').toLowerCase();
  // console.log(graphCity);

  $.ajax({
    url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/',
    type: 'GET'
  }).done(function(data) {
    console.log(data);
    var ctx = document.getElementById('myChart2').getContext('2d');

    ctx.canvas.width = 300;
    ctx.canvas.height = 300;

    var myBarChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["Cost of Living", "Safety", "Housing", "Healthcare", "Education", "Taxation", "Commute Times"],
        datasets: [{
          label: city,
          backgroundColor: 'rgb(25, 181, 254)',

          borderColor: 'rgb(25, 181, 254)',
          data: [data.categories[0].score_out_of_10, data.categories[7].score_out_of_10, data.categories[0].score_out_of_10, data.categories[8].score_out_of_10, data.categories[9].score_out_of_10, data.categories[12].score_out_of_10, data.categories[5].score_out_of_10],
        }]
      },
      options: {}
    });
  });
  // mainThis.setState({info: data});
});

// var ctx = document.getElementById('myChart').getContext('2d');

// var myBarChart = new Chart(ctx, {
// type: 'horizontalBar',
// data: {
//   labels: ["Cost of Living", "Safety", "Housing", "Healthcare", "Education", "Taxation", "Commute Times"],
//   datasets: [{
//     label: city,
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// },
// options: {}
// });
// });

// TeleportAutocomplete.init('.city-select').on('change', function(value) { console.log(value); });

// var ctx = document.getElementById('myChart').getContext('2d');

// var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Cost of Living", "Safety", "Housing", "Healthcare", "Education", "Taxation", "Commute Times"],
//         datasets: [{
//             label: graphCity,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },
//     options: {}
// });

// var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: data,
//     options: options
// });
