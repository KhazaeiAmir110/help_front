import './first.css'
import style from './firs.module.css'
import React from "react";

export default function First(props) {
    return (
        <React.Fragment>
            <div className='base'>
                <h1 className="title">{props.title}</h1>
                <br/>
                <h3 className="subtitle">components this is a best</h3>
                <h4 className={style.card}>Module css</h4>
            </div>
        </React.Fragment>
    )
}