

export default function CourseBox (props) {
    return (
        <div>
            <h1>{props?.title}</h1>
            <p>{props?.description}</p>
            <span>time : {props?.time}</span>
        </div>
    )
}