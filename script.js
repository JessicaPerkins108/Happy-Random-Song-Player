const randoBtn = document.querySelector("#random-song-btn");

const songs = [ 

'Bom Bom - Sam and the Womp',
'Crazy in Love - Beyonce',
'I Don’t Feel Like Dancing - Scissor Sisters',
'Lone Digger - Caravan Palace',
'One Day Like This - Elbow',
'Praise You - Fatboy Slim',
'Sweetest Thing - U2',
'Sunshine - Powers',
'Upside Down, Inside Out - OK Go',
'You Get What You Give - New Radicals',
];



randoBtn.addEventListener("click", () => console.log(songs[0])) // replace 0 index with a dynamic random number 

