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

    state_user_one = {
        name : 'Amir',
        family : 'KH',
        age : 22,
        location : 'Iran'
    }
    render(){
        const {state_user_one} = this
        return (
            <>
                <ul>
                    {
                        Object.keys(state_user_one).map(key=>(
                            <li>
                                <strong>{key}</strong>{state_user_one[key]}
                            </li>
                        ))
                    }
                </ul>
                <hr /><br />
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