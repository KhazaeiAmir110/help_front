import React, { Component } from "react";
import ReactDOM from "react-dom";


class FormTest extends Component{
    constructor(props){
        super(props);

        this.state = {
            date : 'test'
        }
        // this.formChang = this.formChang.bind(this);
    }

    formChang = (event) =>{
        // alert(event.target.value)
        this.setState({
            data:event.target.value,
        })
    }


    render(){
        return (
            <>
                <Counter date={this.state.date} update={this.formChang} />
            </>
        )
    }
}

class Counter extends Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.date} onChange={this.props.update} />
                <h3>{this.props.date}</h3>
            </div>
        )
    }
}

export default FormTest