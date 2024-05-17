import React, {Component} from "react";

class Api_Test extends Component{
    constructor(){
        super();
        this.state = {
            date : ['Hellow ', 'Hellow']
        }
        // this.setState = this.setState.bind(this);
    }

    setStateHandler = () => {
        let item = 'Hellow ';
        let myArrey = this.state.date;
        myArrey.push(item);
        this.setStateHandler({date:myArrey})
    }

    render(){
        return (
            <>
                <button onClick={this.setStateHandler}>Add</button>
                <p>{this.state.date}</p>
            </>
        )
    }
}

export default Api_Test;