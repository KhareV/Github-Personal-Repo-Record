import courses from '../data.json';
import { NextResponse } from 'next/server';
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(q.toLowerCase());
    })
    return NextResponse.json(filteredCourses);
}