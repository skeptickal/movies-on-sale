var x = 'Hello World';
var y = fetch('https://www.dnd5eapi.co/api/spells/acid-arrow')
    .then(function (response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error('Fetch error:', error); });
console.log(x);
//# sourceMappingURL=tsc.js.map