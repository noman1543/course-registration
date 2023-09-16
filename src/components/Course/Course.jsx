/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Course = ({ selectedCourse, remaningTime, totalCredit }) => {

    return (
        <div>
            <div>
                <h3 className="time-remaining">Credit Hour Remaining :{remaningTime} h</h3>
                <hr className="new1"></hr>
            </div>
            <h5 className="course-name">Course Name</h5>
            {
                selectedCourse.map((course) => (
                    <li className="list-decimal " key={course.id}>{course.name}</li>))
            }
            <h4>Total Credit Hou:{totalCredit}</h4>


        </div>
    );
};

export default Course;