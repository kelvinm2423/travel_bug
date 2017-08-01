

import React, { Component } from 'react';
import axios from 'axios';


class Main extends Component {
    // @todo: set your inital state
   constructor(props){
    super(props);
        this.state = {
            city: '',
            city2: ''
    };
   };
    

    submitForm() {
        var city = this.state.city.replace(/\s+/g, '-').toLowerCase();
        axios.get('https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/').then(function (response) {
            var data = response.data;
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
        })
    }


    submitForm2() {
        var city = this.state.city2.replace(/\s+/g, '-').toLowerCase();
        axios.get('https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/').then(function (response) {
            var data = response.data;
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
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [data.categories[0].score_out_of_10, data.categories[7].score_out_of_10, data.categories[0].score_out_of_10, data.categories[8].score_out_of_10, data.categories[9].score_out_of_10, data.categories[12].score_out_of_10, data.categories[5].score_out_of_10],
                    }]
                },
                options: {}
            });
        })
    }


    render() {
        return (
            <div>

                <div>
                    <input type="text" name="city" className="city-select" value={this.state.city} onChange={(event) => this.setState({ city: event.target.value })} />
                    <button type='submit' className="btn btn-warning final" onClick={this.submitForm.bind(this)}>submit</button>
                </div>
                <div>
                    <input type="text" name="city2" className="city-select2" value={this.state.city2} onChange={(event) => this.setState({ city2: event.target.value })} />
                    <button type='submit' className="btn btn-warning final2" onClick={this.submitForm2.bind(this)}>submit</button>
                </div>



                <div className="col-xs-6">
                    <canvas id="myChart" width="400px" height="400px"></canvas>
                </div>

                <div className="col-xs-6">
                    <canvas id="myChart2" width="400px" height="400px"></canvas>
                </div>
            </div>
        );
    }
}

const styles = {
    // STYLE RULES GO HERE e.g.
    successText: {
        fontSize: 25,
        color: 'green'
    }
}

export default Main;