import Link from "next/link";



const Courses = ({ courses }) => {

    return (
        <div className="courses">
            {courses.map((course) => (
                <div key={course.id} className="card">
                    <h2>{course.title}</h2>
                    <p>Level: {course.level}</p>
                    <p>{course.description}</p>
                    <Link href={course.link} className="btn">Go to the Course</Link>
                </div>
            ))}
        </div>
    )
}

export default Courses;
