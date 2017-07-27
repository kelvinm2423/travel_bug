// import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import $ from 'jQuery';


// class Main extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state={info: {}}
// 	}

// 	componentDidMount() {
// 		this.initializeDate();
// 	}


// 	initializeDate() {
// 		let mainThis = this;


// // FIRST CITY SEARCH
// 	$('.final').click(function(event) {
//     event.preventDefault();
//     var city = $('.city-select').val();
//     city = city.replace(/\s+/g, '-').toLowerCase();
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/',
//       type: 'GET'
//     }).done(function(data) {
//       console.log(data);
//       mainThis.setState({info: data});
//     });

//     //IMAGES
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city + '/images/',
//       type: 'GET'
//     }).done(function(results) {
//       console.log(results);
//         // mainThis.setState({info: results});
//         // 
//         // console.log(mainThis.state);
//     });
//   });


// //SECOND CITY SEARCH
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

//     //SECOND IMAGES
//     $.ajax({
//       url: 'https://api.teleport.org/api/urban_areas/slug:' + city2 + '/images/',
//       type: 'GET'
//     }).done(function(data) {
//       console.log(data);
//         info2 = data;
//       // var info = response.results;
//     });
//   });

// 	}

// 	render() {
// 		return(
// 			<div>
// 				<h1>Hello1</h1>
// 				<div>
// 					{this.state.info.summary}
// 				</div>
// 			</div>
// 			);
// 	}
// }

// ReactDom.render(<Main  />, document.getElementById('city-info-1'));