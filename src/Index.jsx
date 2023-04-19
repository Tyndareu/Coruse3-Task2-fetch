import { useState, useEffect } from 'react'
import { addScheduleTimes } from './Courses/AddScheduleTimes'
import { CourseList } from './Courses/CourseList'
import './Css/Index.css'

let isLoading = true

export default function App () {
  const [course, setCourse] = useState()

  const AllCourses = async () => {
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php'
    const response = await fetch(url)
    if (!response.ok) throw response
    setCourse(addScheduleTimes(await response.json()))
  }

  useEffect(() => {
    AllCourses()
    isLoading = false
  }, [])

  if (isLoading) {
    return <h1>Loading the schedule...</h1>
  } else {
    return (
      <div className="container">
      <h1> CS Courses for 2018-2019</h1>
      <CourseList courses={ course.courses } />
    </div>
    )
  }
}
