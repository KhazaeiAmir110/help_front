import React, {Component} from "react";
import '../roocket/CourseBox'
import CourseBox from "../roocket/CourseBox";

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


// Props
class Props_Test extends Component{
    render(){
        return (
            <div>
                <h3>First Name : {this.props.fname}</h3>
                <h3>Last Name : {this.props.lname}</h3>
            </div>
        )
    }
}

// default props
Props_Test.defaultProps = {
    fname : 'No fname',
    lname : 'No lname'
}

// Return

export default function Test() {
    return (
        <>
            <h1>Hellow file Component</h1>
            <User />
            <Text />

            <hr /><br />

            {/* Props */}
            <h1 className="titr">Props</h1>
            <Props_Test fname='Amir' />

            <br />
            {/*  Roocket  */}
            <CourseBox title='course number one' description='this is a number course'/>
            <CourseBox title='course number two' description='this is a number ajax' time='10s'/>
        </>
    )
}