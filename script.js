const randoBtn = document.querySelector("#random-song-btn");
const songName = document.querySelector("#song-name");

// const songs = [ 

// 'Bom Bom - Sam and the Womp',
// 'Crazy in Love - Beyonce',
// "I Don’t Feel Like Dancing - Scissor Sisters",
// 'Lone Digger - Caravan Palace',
// 'One Day Like This - Elbow',
// 'Praise You - Fatboy Slim',
// 'Sweetest Thing - U2',
// 'Sunshine - Powers',
// 'Upside Down, Inside Out - OK Go',
// 'You Get What You Give - New Radicals',
// 'I Wanna Dance with Somebody - Whitney Houston',
// 'Uptown Funk - Mark Ronson ft Bruno Mars',
// 'Good as Hell - Lizzo',
// 'Dancing Queen - ABBA',
// "Can't Stop the Feeling - Justin Timberlake",
// 'Shut Up and Dance - Walk the Moon',
// 'Happy - Pharrell Williams',
// 'Walking on Sunshine - Katrina & The Waves',
// 'Shake It Off - Taylor Swift',
// 'Girls Just Want to Have Fun — Cyndi Lauper',
// ];

let tracks = [ '2tUBqZG2AbRi7Q0BIrVrEj', '6KgBpzTuTRPebChN0VTyzV', '0GjEhVFGZW8afUYGChu3Rr', '6JV2JOEocMgcZxYSZelKcc', '4kbj5MwxO1bq9wjT5g9HaA', '60nZcImufyMA1MKQY3dcCH', '05wIrZSwuaVWhcv5FfqeH0', '0cqRj7pUJDkTCEsJkx8snD', '4y1LsJpmMti1PfRQV9AWWe', '5jE48hhRu8E6zBDPRSkEq7', '2fTsFCKRFQ5M0igJgabnLA', '5xvUgoVED1F4mBu8FL0HaW', '5IVuqXILoxVWvWEPm82Jxr', '32OlwWuMpZ6b0aN2RZOeMS', '60nZcImufyMA1MKQY3dcCH', '1OZSVl0JJ1MBzibpuhmmXb', '6KgBpzTuTRPebChN0VTyzV','3MJov5mT64K42o1Rffhblq', '0d5f6gzzW1Pgx9uJsLrSDP', '1q9l6c8bAzqWcvO3DM6FsR','3Y91fIpStxQrUaXuaTbGVv','10yY7i70r9wtllofw0GIpx','7ndGFo9nZ108KPgXtfYWCe','7ndGFo9nZ108KPgXtfYWCe','1Cwsd5xI8CajJz795oy4XF', '6QXAMI7XJf2n2dO4RUhOde']

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
// randoBtn.addEventListener("click", () => document.getElementById("title").innerText = songs[Math.floor(Math.random()*songs.length)]);
randoBtn.addEventListener("click", () => document.querySelector('.spotify-embed').src = `https://open.spotify.com/embed/track/${tracks[Math.floor(Math.random()*tracks.length)]}?utm_source=generator&theme=0`);

