'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/courses/search?query=${query}`);
        const data = await res.json();
        getSearchResults(data); // Call the function passed via props
    };

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input
                type="text"
                className='search-input'
                placeholder='Search Courses...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>Search</button>
        </form>
    );
};

export default CourseSearch;
