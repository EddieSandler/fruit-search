const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO

	//filter array for elements that include the search term
	let searchTerm = str.toLowerCase();

	results = fruit.filter(el => {
		return el.toLowerCase().includes(searchTerm);
	});



	showSuggestions(results, searchTerm);

}



function searchHandler(e) {
	// TODO
	//get inputted value
	let userInput = input.value;

	//search inputted value in fruit list
	if (userInput.length >= 3) {
		search(userInput);

	}


}




function showSuggestions(results, inputVal) {

	// TODO

	// let list = results.map(el => {
	// 	return el.toLowerCase();
	// });


	suggestions.innerHTML = '';

	for (const suggestion of results) {
		const suggestionElement = document.createElement('div');
		suggestionElement.textContent = suggestion;

		suggestionElement.addEventListener('click', () => {
			input.value = suggestion;

			suggestions.innerHTML = '';
		});
		suggestions.appendChild(suggestionElement);

	}
	useSuggestion(suggestions);

}


function useSuggestion(e) {
	// TODO
	console.log(e.target);



}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);