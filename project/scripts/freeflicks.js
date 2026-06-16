const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

/* 
ARRAY OF MOVIES

        movieTitle: "Movie Title",
        genre: ["scifi", "animation"], // genre property is an array too
        year: 1970,
        language: "english",
        imageURL: "https://.jpeg",
        source: "https://.mp4"

*/

const movies = [
    {
        movieTitle: "The Hitch-Hiker",
        genre: ["thriller"],
        year: 1953,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Hitch-Hiker#/media/File:The_Hitch-Hiker_(1953_poster).jpeg",
        source: "https://tile.loc.gov/storage-services/service/mbrs/ntscrm/00047382/00047382.mp4"
    },
    {
        movieTitle: "Fantastic Planet",
        genre: ["scifi", "animation"],
        year: 1973,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Fantastic_Planet#/media/File:Fantastic_Planet_film_poster.jpg",
        source: "https://archive.org/details/fantastic-planet__1973"
    },
]