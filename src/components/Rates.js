import React from 'react';
import Exchange from './Exchange';

class Rates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rates: [],
            input:'',
        };
    }


    async componentDidMount() {
        
        const arrayOfRates = [];
        const response = await fetch(`https://api.exchangeratesapi.io/latest`);
        const json = await response.json();
        for (const property in json.rates) {
          
          arrayOfRates.push({ property, value: json.rates[property] });
        }
        this.setState({ rates: arrayOfRates });
      }

    render() {
        const { rates } = this.state; 
        console.log(rates[25])
             
        return (
            <div id="main-rates">
                <div>
                    <p>Below is a list of all the major currencies in comparison to the base rate set in: 2018-04-08</p>
               
                        <br></br>
                        <select name="rates">
                            
                            {this.state.rates && this.state.rates.map((rate) => (
                            <option> 
                            {rate.property.slice(0, 3)} - {rate.value} 
                        </option> 
                            ))}
                        </select>
                    <br></br>
                    <div>
                        <h3>Exchange different rates:</h3>
                    </div>
                    {/* <form id="form">
                            <label for="convert">Convert</label>
                            <input type="number" placeholder="0"></input>
                            
                            <label for="from">From</label>
                            <select name="rates">
                                {this.state.rates &&this.state.rates.map((rate) => (
                                <option> 
                                {rate.property.slice(0, 3)}
                                </option> 
                            ))}

                                    

                                </select> 
                        
                            <label>To</label>
                                <select name="rates">
                                {this.state.rates && this.state.rates.map((rate) => (
                                <option> 
                                    {rate.property.slice(0, 3)}
                                    </option> 
                            
                            ))}
                            </select>
                            <br></br>
                            <br></br><button>Go</button>
                        </form> */}
                        
                        <br></br>

{/* 
                        <div>
                            <h3>Result</h3>
                                <input></input>
                        </div> */}
                        <Exchange/>

        
            </div>

         </div>
        );
    }
}

export default Rates ; 