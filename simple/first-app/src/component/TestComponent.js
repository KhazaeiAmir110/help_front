import React, {Component} from "react";

class User extends Component{
    state = {
        one : {
            name  : 'Amir',
            age : 22
        },
        two : {
            name  : 'Ali',
            age : 21
        },
        three : {
            name  : 'Javid',
            age : 32
        },
        four : {
            name  : 'Gadget',
            age : 42
        },
    }
    render(){
        return (
            <>
                <ul>
                    <li>
                        name : {this.state.one.name}
                    </li>
                    <li>
                        name : {this.state.two.name}
                    </li>
                    <li>
                        name : {this.state.three.name}
                    </li>
                    <li>
                        name : {this.state.four.name}
                    </li>
                </ul>
            </>
        )
    }

}

export default function Test() {
    return (
        <>
            <h1>Hellow file Component</h1>
            <User />
        </>
    )
}