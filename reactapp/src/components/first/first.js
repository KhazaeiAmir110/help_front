import './first.css'
export default function First(props) {
    return(
        <div className='base'>
            <h1 className="title">{props.title}</h1>
            <br/>
            <h3 className="subtitle">components this is a best</h3>
        </div>
    )
}