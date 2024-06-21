const x: String = 'Hello World';

async function fetchData() {
    try {
      const response = await fetch('https://www.dnd5eapi.co/api/spells/acid-arrow');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // Call the async function
  fetchData();

console.log(x);