import React from 'react'





class Exchange extends React.Component {


            // const value = parseInt(document.getElementById("value1").value)


    state = {
         count: 67


    }



    handleTheChange = (event) =>{
        this.setState({
           [event.target.name]: event.target.value 
        })
    }


    handleTheSubmit = (event)=> {
        event.preventDefault()

    }

    clickerIncrement = () => {
         const newInput = this.state.count * 1.1922
        this.setState({
           count: newInput
         })
        
         
    }


    render(){         
        

        return(
            <div>
                <form id="form" onSubmit={this.handleTheSubmit}>
                            <label for="convert">Convert</label>
                            <input  id="value1" type="number" placeholder="0" value="67"></input>
                            
                            <label for="from">From</label>
                            <select name="rates">
                                
                            <option>GBP</option>

                                    

                                </select> 
                        
                            <label>To</label>
                                <select>
                                    <option> USD</option>
                                </select>
                            <br></br>
                            <br></br><button type="submit" onClick={this.clickerIncrement}>Go</button>
                        </form>

                        <div>
                            <h3> This is how much USD you would get {this.state.count} </h3>
                        </div>
            </div>
        )
    }
}

export default Exchange