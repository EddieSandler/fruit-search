const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
//filter array for elements that include the search term

const searched=fruit.filter(el=>{
	return el.toLowerCase().includes(str)
})

results.push(searched)

return showSuggestions(results,str)


}

function searchHandler(e) {
	// TODO
	//get inputted value
	let searchTerm= input.value

//search inputted value in fruit list
	search(searchTerm)

}




function showSuggestions(results, inputVal) {

	// TODO
	// console.log(results,inputVal)
// 	const suggestionElement = document.createElement('div')
// for(let result of results){
// 	suggestionElement.append(result)
// 	suggestions.innerHTML=''
// 	suggestions.append(suggestionElement)

// }
results.forEach((option) => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.value = option;
	suggestions.appendChild(optionElement);
});


}

function useSuggestion(e) {
	// TODO

	console.log(suggestions)

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);