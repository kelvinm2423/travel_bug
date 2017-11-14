

import React, { Component } from 'react';
import axios from 'axios';
//import Forum from './Forum.js';
import GraphItems from './graphItems.js';


class Main extends Component {
    // @todo: set your inital state
   constructor(props){
    super(props);
        this.state = {
            city: '',
           
            //name: sessionStorage.getItem('userName'),
     name: 'insert name here',

    };
   };
    

    submitForm() {
        var city = this.state.city.replace(/\s+/g, '-').toLowerCase();
         this.setState({
            city: ''
                
    });
        axios.get('https://api.teleport.org/api/urban_areas/slug:' + city + '/scores/').then(function (response) {
            var data = response.data;
            console.log(data);
            var ctx = document.getElementById('myChart').getContext('2d');

            ctx.canvas.width = 400;
            ctx.canvas.height = 400;
 
            var myBarChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: ["Cost of Living", "Safety", "Healthcare", "Education", "Taxation", "Commute Times"],
                    datasets: [{
                        label: city,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [data.categories[0].score_out_of_10, data.categories[7].score_out_of_10, data.categories[8].score_out_of_10, data.categories[9].score_out_of_10, data.categories[12].score_out_of_10, data.categories[5].score_out_of_10],
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
             <h1> Welcome {this.state.name} !</h1>
             <h1> Type in the name of a city you want to learn about! </h1>

                
                 <div>
                     <input type="text" name="city" className="city-select" value={this.state.city} onChange={(event) => this.setState({ city: event.target.value })} />
                     <button type='submit' className="btn btn-warning final" onClick={this.submitForm.bind(this)}>submit</button>
                 </div>
        </div>               



<GraphItems  />


        </div>
                 
                );
    }
}

export default Main;