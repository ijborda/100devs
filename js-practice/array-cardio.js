const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
inventors.filter( inventor => inventor.year >= 1500 && inventor.year <= 1599 )
// Output: 
// 0: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642} 
// 1: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
inventors.map( inventor => `${inventor.first} ${inventor.last}`)
// Output:
// ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Hanna Hammarström']


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort( (a, b) => a.year - b.year)
// Output:
// 0: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 1: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 2: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 3: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 4: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}
// 5: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 6: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 7: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 8: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 9: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}
// 10: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 11: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
inventors.reduce( (totalYear, inventor) => totalYear + (inventor.passed - inventor.year), 0)
// Output:
// 861


// 5. Sort the inventors by years lived
inventors.sort( (a, b) => (b.passed - b.year)  - (a.passed - a.year))
// Output:
// 0: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}
// 1: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 2: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 3: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}
// 4: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 5: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 6: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 7: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 8: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 9: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 10: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 11: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// let list = document.querySelectorAll(".mw-category li a")
// let boulevardsParis = Array.from(list).map( list => list.innerHTML )
// text is now:
const boulevardsParis = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', "Haussmann's renovation of Paris", 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone']
boulevardsParis.filter( boulevard => boulevard.includes("de"))
// Output:
// ["Boulevard de l'Amiral-Bruix", 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard de la Zone']


// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort( (a, b) => a.split(" ")[0].localeCompare(b.split(" ")[0]))
// Output:
// ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Ben-Gurion, David', 'Benchley, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
data.reduce( (freq, current) => {
  if (current in freq) {
    freq[current] += 1
  } else {
    freq[current] = 1
  }
  return freq
}, {})
// Output:
// {car: 5, truck: 3, bike: 2, walk: 2, van: 2}