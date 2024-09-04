'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Courses from "./components/Courses";
import Loading from './loading.jsx';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  const getSearchResults = (results) => {
    setCourses(results);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Welcome to my Github Record</h1>
      <h2>Courses Followed By Me:</h2>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </div>
  );
}

export default HomePage;
