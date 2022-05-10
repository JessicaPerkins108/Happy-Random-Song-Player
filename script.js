const randoBtn = document.querySelector("#random-song-btn");
const songName = document.querySelector("#song-name");


const songs = [ 

'Bom Bom - Sam and the Womp',
'Crazy in Love - Beyonce',
"I Don’t Feel Like Dancing - Scissor Sisters",
'Lone Digger - Caravan Palace',
'One Day Like This - Elbow',
'Praise You - Fatboy Slim',
'Sweetest Thing - U2',
'Sunshine - Powers',
'Upside Down, Inside Out - OK Go',
'You Get What You Give - New Radicals',
'I Wanna Dance with Somebody - Whitney Houston',
'Uptown Funk - Mark Ronson ft Bruno Mars',
'Good as Hell - Lizzo',
'Dancing Queen - ABBA',
"Can't Stop the Feeling - Justin Timberlake",
'Shut Up and Dance - Walk the Moon',
'Happy - Pharrell Williams',
'Walking on Sunshine - Katrina & The Waves',
'Shake It Off - Taylor Swift',
'Girls Just Want to Have Fun — Cyndi Lauper',
];


/*
let randomItem = array[Math.floor(Math.random()*array.length)];
let el = document.querySelector("p");
p.innerText = randomItem;
*/

  /*  array.forEach((item) => {
    let songName = document.createElement("p");
    songName.innerHTML = item;
    songName.style.color = "black";
    songName.appendChild(p);
} )
*/


// let randomItem = songs[Math.floor(Math.random()*songs.length)];

// randoBtn.addEventListener("click", randomItem);
randoBtn.addEventListener("click", () => document.getElementById("title").innerText = songs[Math.floor(Math.random()*songs.length)]);


