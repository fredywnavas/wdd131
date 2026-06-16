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

        movieTitle: "",
        genre: [],
        year: 1970,
        language: "english",
        imageURL: "",
        source: ""

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
    {
        movieTitle: "The Last Man on Earth",
        genre: ["scifi", "horror"],
        year: 1964,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Last_Man_on_Earth_(1964_film)#/media/File:Lastmanonearth1960s.jpg",
        source: "https://archive.org/details/the-last-man-on-earth-1964-by-ubaldo-ragona-and-sidney-salkow"   
    },
    {
        movieTitle: "Charade",
        genre: ["comedy", "romantic"],
        year: 1963,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Charade_(1963_film)#/media/File:Charade_(1963_poster).jpg",
        source: "https://en.wikipedia.org/wiki/File:Charade_(Stanley_Donen,_1963).webm"
    },
    {
        movieTitle: "The Little Shop of Horrors",
        genre: ["comedy", "horror"],
        year: 1960,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Little_Shop_of_Horrors#/media/File:LittleShop.jpg",
        source: "https://commons.wikimedia.org/wiki/File:The_Little_Shop_of_Horrors_(1960)_by_Roger_Corman.webm"
    },
    {
        movieTitle: "Teenagers from Outer Space",
        genre: ["scifi"],
        year: 1959,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Teenagers_from_Outer_Space_(film)#/media/File:Teenagersouterspace.jpg",
        source: "https://archive.org/details/horror-sci-fi-thriller-movie-teenagers-from-outer-space-1959"
    },
    {
        movieTitle: "Jack and the Beanstalk",
        genre: ["comedy", "fantasy"],
        year: 1952,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Jack_and_the_Beanstalk_(1952_film)#/media/File:Jack_and_the_Beanstalk_(1952_film)_poster.jpg",
        source: "https://en.wikipedia.org/wiki/File:Jack_and_the_Beanstalk_(1952).webm"
    },
    {
        movieTitle: "Vengeance Valley",
        genre: ["drama", "western"],
        year: 1951,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Vengeance_Valley#/media/File:Vengeance_valley_poster.jpg",
        source: "https://www.youtube.com/watch?v=CAdygNgLGW0"
    },
    {
        movieTitle: "Cyrano de Bergerac",
        genre: ["comedy", "adventure"],
        year: 1950,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Cyrano_de_Bergerac_(1950_film)#/media/File:Cyrano_de_Bergerac_(1951_poster).jpg",
        source: "https://en.wikipedia.org/wiki/File:Cyrano_de_Bergerac_(1950).webm"
    },
    {
        movieTitle: "Pigs in a Polka",
        genre: ["animation"],
        year: 1943,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Pigs_in_a_Polka#/media/File:Pigs_in_a_Polka_title_card.png",
        source: "https://en.wikipedia.org/wiki/File:Pigs_in_a_Polka_LTGC.webm"
    },
    {
        movieTitle: "A Tale of Two Kitties",
        genre: ["animation"],
        year: 1942,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/A_Tale_of_Two_Kitties#/media/File:A_Tale_of_Two_Kitties_(1942)_Title_Card.png",
        source: "https://en.wikipedia.org/wiki/File:A_Tale_of_Two_Kitties_190612_LTPC.webm"
    },
    {
        movieTitle: "The Dover Boys at Pimento University",
        genre: ["animation"],
        year: 1942,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Dover_Boys_at_Pimento_University#/media/File:The_Dover_Boys_at_Pimento_University_-_title_card.png",
        source: "https://archive.org/details/the-dover-boys-at-pimento-university-1942-hd-blu-ray-remux"
    },
    {
        movieTitle: "Fox Pop",
        genre: ["animation"],
        year: 1942,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Fox_Pop#/media/File:Merrie_Melodies_-_Fox_Pop_(1942)_-_Lobby_Card.jpg",
        source: "https://en.wikipedia.org/wiki/File:Chuck_Jones_-_Merrie_Melodies_-_Fox_Pop_(1942)_(restored_HD_version)_(2).webm"
    },
    {
        movieTitle: "The Wabbit Who Came Ti Supper",
        genre: ["animation"],
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Wabbit_Who_Came_to_Supper#/media/File:Wabbitwhocametosupper.jpg",
        source: "https://www.youtube.com/watch?v=NmrBmzt0kvE"
    },
    {
        movieTitle: "The Ducktators",
        genre: ["animation"],
        year: 1942,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/The_Ducktators#/media/File:The_Ducktators_title_card_representing_the_word_%22Dictators%22_2014-02-15_20-28.jpg",
        source: "https://en.wikipedia.org/wiki/File:The_Ducktators_190611_LTGC.webm"
    },
    {
        movieTitle: "Pantry Panic",
        genre: ["animation"],
        year: 1941,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Pantry_Panic#/media/File:Pantrypanic_TITLE.jpg",
        source: "https://en.wikipedia.org/wiki/File:Pantry_Panic.webm"
    },
    {
        movieTitle: "The Spring",
        genre: ["animation"],
        year: 1936,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/To_Spring#/media/File:To_Spring_Title_Card.png",
        source: "https://en.wikipedia.org/wiki/File:To_Spring_(1936).webm"
    },
    {
        ovieTitle: "Jerky Turkey",
        genre: ["animation"],
        year: 1945,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Jerky_Turkey#/media/File:Jerky_Turkey_(1945)_-_Poster.jpg",
        source: "https://www.youtube.com/watch?v=MJ_EDzA6yJk"
    },
    {
        movieTitle: "Superman - Jungle Drums",
        genre: ["animation"],
        year: 1943,
        language: "english",
        imageURL: "https://en.wikipedia.org/wiki/Jungle_Drums#/media/File:Jungledrums1.JPG",
        source: "https://www.youtube.com/watch?v=n2LUJQgfhcI"
    },
];