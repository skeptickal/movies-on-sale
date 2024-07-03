const fetchData = async (url: string): Promise<void> => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData('https://serpapi.com/search?engine=google_play_movies');