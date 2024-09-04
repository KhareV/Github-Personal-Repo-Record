import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/KhareV/${name}`,
            {
                headers: {
                    'Authorization': ``, // Add this line
                },
                next: {
                    revalidate: 60,
                },
            }
        );

        console.log('Request URL:', `https://api.github.com/repos/KhareV/${name}`);
        console.log('Response Status:', response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repo = await response.json();
        return repo;
    } catch (error) {
        console.error('Error fetching repo:', error);
        return {};
    }
}



const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count || 0}</span>
                </div>
                <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count || 0}</span>
                </div>
                <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count || 0}</span>
                </div>
            </div>
        </>
    );
};

export default Repo;
