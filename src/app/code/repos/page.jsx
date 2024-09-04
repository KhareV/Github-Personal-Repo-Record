import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
    try {
        const response = await fetch(
            'https://api.github.com/users/KhareV/repos',
            {
                next: {
                    revalidate: 60,
                },
                headers: {
                    'Authorization': ``,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const repos = await response.json();
        console.log('Fetched repos:', repos);
        return repos;
    } catch (error) {
        console.error('Error fetching repos:', error);
        return [];
    }
}


const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div className='repos-container'>
            <h2>Repositories</h2>
            <ul className='repo-list'>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>

                            <div className='repo-details'>
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ReposPage;