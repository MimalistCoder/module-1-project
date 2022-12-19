import { searchTesting, sort, newsList } from './main.js';

test('search function returns correct results', () => {
  // Set up the test input and expected output
  const inputValue = 'Decoder';
  const expectedOutput = [
    "Decoder: Mining asteroids for minerals can help spare Earth", 
    "Decoder: Armenia in a bind as Ukraine war resets global order"
  ];

  // Call the search function with the test input
  const searchResults = searchTesting(inputValue);

  // Assert that the output matches the expected output
  expect(searchResults).toEqual(expectedOutput);
});


test('sort function returns correct results', () => {
  // Set up the test input and expected output
  const type = 'ascending';
  const expectedOutput = [
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?",
  ];

  // Call the sort function with the test input
  const sortedNewsList = sort(type);

  // Assert that the output matches the expected output
  expect(sortedNewsList).toEqual(expectedOutput);
});
