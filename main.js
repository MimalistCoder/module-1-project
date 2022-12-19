//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can update the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings

//write a code to test this using jest
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;
  const searchResults = newsList.filter(item => item.includes(inputValue));
  return searchResults;
}

export function searchTesting(inputValue) {
  const searchResults = newsList.filter(item => item.includes(inputValue));
  return searchResults;
}


export function sort(type) {
  let sortedNewsList;
  if (type == "ascending") {
    // sort the array in ascending order
    sortedNewsList = newsList.sort((a, b) => a.localeCompare(b));
  } else {
    // sort the array in descending order
    sortedNewsList = newsList.sort((a, b) => b.localeCompare(a));
  }

  return sortedNewsList;
}
