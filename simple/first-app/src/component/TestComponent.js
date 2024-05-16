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
        const {state} = this
        return (
            <>
                <ul>
                    {
                        Object.keys(state).map(key=>(
                            <li>
                                <strong>{key}</strong>{state[key]}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

}

class Text extends Component {
    state = {
        header : "This is a Header",
        body : "Loading..."
    }
    render() {
        const {header , body} = this.state
        return (
            <>
                <h1>
                    {header}
                </h1>
                <h3>
                    {body}
                </h3>
            </>
        )
    }
}

export default function Test() {
    return (
        <>
            <h1>Hellow file Component</h1>
            <User />
            <Text />
        </>
    )
}