export async function fetchData(): Promise<any> {
    try {
        const response = await fetch('https://portfolio-server-jisj.onrender.com/', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Notion-Version': '2022-02-22',
                'id': '1829aae95502442bab583cc3b467588a',
                'page_size': '100',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}