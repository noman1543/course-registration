/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import './Cards.css'
import Course from '../Course/Course';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cards = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([])
    const [remaningTime, setRemainingTime] = useState([20])
    const [totalCredit, setTotalCredit] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find((subject) => subject.id == course.id);

        let count = course.credit;

        if (isExist) {
            return toast("it's already booked")
        }
        else {
            selectedCourse.forEach((subject) => {
                count = count + subject.credit;
                setTotalCredit(count);
            });




            const remaningTime = 20 - count;
            setRemainingTime(remaningTime);
            setSelectedCourse([...selectedCourse, course])
        }
    };

    return (
        <div>

            <div className="main-container">
                <div className="cards-container">
                    <div className="courses-card-container">
                        {
                            allCourses.map(course => (
                                <div key={course.id} className="cards" >
                                    <div className="cards-img">
                                        <img className='photo' src={course.image} alt="" />
                                        <h2 className='name'>{course.name}</h2>
                                        <p className='description'>{course.description}</p>
                                        <div className='info'>
                                            <p><small>Price:${course.price}</small></p>
                                            <div className="credit">
                                                <img className='icon' src={course.icon} alt="" />
                                                <p><small>Credit:{course.credit}h</small></p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleSelectCourse(course)} className='btn'>Select</button>
                                    </div>
                                    < ToastContainer />

                                </div>

                            ))
                        }
                    </div>
                    <div className="course-carts">

                        <Course selectedCourse={selectedCourse} remaningTime={remaningTime} totalCredit={totalCredit} ></Course>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cards;