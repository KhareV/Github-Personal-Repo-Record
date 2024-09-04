import Link from 'next/link';

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
        const response = await fetch(
            `https://api.github.com/repos/KhareV/${name}/contents`,
            {
                headers: {
                    'Authorization': '', // Include this if needed
                },
                next: {
                    revalidate: 60,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const contents = await response.json();
        console.log('Fetched Contents:', contents); // Log the contents for debugging
        return contents;
    } catch (error) {
        console.error('Error fetching repo contents:', error);
        return [];
    }
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);

    // No filtering needed, we want to show both files and directories
    const items = Array.isArray(contents) ? contents : [];

    if (items.length === 0) {
        return <p>No files or directories found.</p>;
    }

    return (
        <>
            <h3>Files and Directories</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.path}>
                        <Link href={`/code/repos/${name}/${item.path}`}>{item.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
