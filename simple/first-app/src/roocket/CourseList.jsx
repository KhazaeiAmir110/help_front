

export default function CourseList (){
    let courses = [
        {
            title : 'Python',
            description : 'Hellow python'
        },
        {
            title : 'PHP',
            description : 'Hellow php'
        },
        {
            title : 'C++',
            description : 'Hellow c++'
        },
        {
            title : 'JAVA',
            description : 'Hellow java'
        },
    ]

    return (
        <>
            {courses.map((course) =>(
                <div>
                    <h1>{course?.title}</h1>
                    <p>{course?.description}</p>
                </div>
            ))}
        </>
    )
}