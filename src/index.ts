const x: String = 'Hello World';

const y = fetch('https://www.dnd5eapi.co/api/spells/acid-arrow')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));

console.log(x);