const fetchData = async (query: string): Promise<void> => {

    const apiKey = '768872f198bf8db16efc365c23b22a99b9af9cbf291009b1f3cb86cbc3240d4b';
    const baseUrl = 'https://serpapi.com/search'

    const params = new URLSearchParams({
        q: query,
        api_key: apiKey,
      });

    try {
      const response = await fetch(`${baseUrl}?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData('new movies on sale');