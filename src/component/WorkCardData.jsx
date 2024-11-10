import RecipeFinder from "../assets/RecipeFinder.png"
import Quizz from "../assets/Quizz.png"
import ShoppingList from "../assets/ShoppingList.png"
import TypicodeTodo from "../assets/TypicodeTodo.png"
import SpeechSynthesis from "../assets/SpeechSynthesis.png"
import MusicPlayer from "../assets/MusicPlayer.png"
import ChuckNorisJoke from "../assets/ChuckNorisJoke.png"
import SimpleTodo from "../assets/SimpleTodo.png"
import WeatherApp from "../assets/WeatherWebApp.png"

const projectCardData = [
    {
        imgsrc: RecipeFinder,
        title: "Recipe Finder WebApp",
        text: "This is the Recipe Finder WebApp. Whatever you typed in the input and search it. It will provide the option of dishes and you can click the choosen dish and then click the view details button it shows you the ingredients and instruction. This is happening because data fetching applied in this and The API Name is **api.spoonacular.com**. This API provides the all required data.",
        view: "https://recipe-finder-steel.vercel.app/",
        source: "https://github.com/DhruvGuptahub/recipe-finder"
    },
    {
        imgsrc: Quizz,
        title: "Quizz Design WebApp",
        text: "The user sees a list of multiple-choice questions. The user selects an option for each question. When they press the Submit Quiz button, the app calculates how many questions they answered correctly.The user's score is displayed below the quiz. We store an array of questions, each with multiple options and a correctAnswer. The array could be extended with more questions as needed.A countdown timer starts at 30 seconds. If the user doesn't submit the quiz in time, the quiz is automatically submitted when the timer hits zero. Timer resets to 30 seconds when switching between quizzes.",
        view: "https://quiiiiz.netlify.app/",
        source: "https://github.com/DhruvGuptahub/quizz-app"
    },
    {
        imgsrc: WeatherApp,
        title: "Weather WebApp",
        text: "Allows users to input a city name.Fetches weather data from a public API based on the city. Displays the weather information, such as temperature, weather description, humidity, etc. The user enters a city name in the input field. The handleInputChange function updates the city state with the input value. Fetching Weather Data: When the user clicks the **Get Weather** button, the fetchWeather function is triggered. It checks if the city input is not empty. It then makes an API call to OpenWeatherMap using fetch() in useEffect with the city name and API key. If the city is found, the response is converted to JSON, and the weather state is updated with the fetched data. If there is an error(e.g., city not found), it catches the error and displays an alert. ",
        view: "https://weather-app-inky-phi.vercel.app/",
        source: "https://github.com/DhruvGuptahub/weather"
    },
    {
        imgsrc: SimpleTodo,
        title: "Quizz Design WebApp",
        text: "This is Basic React WebApp that build on CRUD functionality. It takes the data in the input field and stores it at the DOM. We can toggle it for complition by clicking on it and We also the Delete Functionality so we can delete if want the task to be deleted.",
        view: "https://simple-todo-list-chi.vercel.app/",
        source: "https://github.com/DhruvGuptahub/todo-list"
    },
    {
        imgsrc: ShoppingList,
        title: "Shopping List WebApp",
        text: "This WebApp has all the CRUD functionality of JavaScript but It also have the storage functionality. Firstly it takes the input from the user and stores at the local storage and after that pass to localstorage using getItemsFromStorage functrion and it holds the data of the user. Then wherever the user access the Webapp it can access their data beacuse of JavaScript pre-defined function of getItemsFromStorage. In this i applied SetInterval and ClearInterval for the color start change. When the user click the start button it start changing the color and When the user click stop button it stops the color changing and be at that backgroundcolor.",
        view: "https://shoppingglists.netlify.app/",
        source: "https://github.com/DhruvGuptahub/shopping-list"
    },
    {
        imgsrc: TypicodeTodo,
        title: "Typicode Todo WebApp",
        text: "This is a simple todo list application built with JavaScript. It allows users to create, view, update, and delete todo items. The application interacts with a RESTful API to store and retrieve todo data.Features: User can Add todo, View todo, Click at todo for mark it as completed and double click at todo to delete it. All this action also performs at API. This application interacts with the JSONPlaceholder API(https://jsonplaceholder.typicode.com) to perform CRUD operations on todo items. The core functionality of the application is implemented using JavaScript for DOM manipulation and API interactions. ",
        view: "https://typicodetodomini.netlify.app/",
        source: "https://github.com/DhruvGuptahub/typicode--todos--mini-project"
    },
    {
        imgsrc: SpeechSynthesis,
        title: "Speech Synthesis WebApp",
        text: "In this webapp i used the speech synthesis many predefined functions. I used get voices functions for getting the drop down voices options so that voices can convert in different accent. I used utterthis function for the utterece of the text we entered in input box. After that select the voice, language and accent in which you want to utter.The core functionality of the application is implemented using JavaScript for DOM manipulation and API interactions.",
        view: "https://speechsynthesisweb.netlify.app/",
        source: "https://github.com/DhruvGuptahub/Speech-synthesis"
    },
    {
        imgsrc: MusicPlayer,
        title: "Music Player WebApp",
        text: "This is a simple music player project built with HTML, CSS, and JavaScript. It allows users to play, pause, and skip through a playlist of songs. Features Play and pause functionality Skip to next and previous tracksDisplay current track information Progress bar indicating current playback position Volume controller. The track information pop's out when the music get played with the Progress bar so user can forward or backward the track. And when the user pause the track, the track details automatically goes hide.",
        view: "https://basicmusicplayerr.netlify.app/",
        source: "https://github.com/DhruvGuptahub/music-player"
    },
    {
        imgsrc: ChuckNorisJoke,
        title: "Chuck Noris Joke WebApp",
        text: " This WebApp shows the new chuck noris jokes whenever we click the generate button and the UI gets rerendered. It shows the new jokes every time. In this i use this api.chucknorris.io/jokes. This is the very basic app that uses the api and shows the data. The core functionality of the application is implemented using JavaScript for DOM manipulation and API interactions.",
        view: "https://chucknorisjoke.netlify.app/",
        source: "https://github.com/DhruvGuptahub/joke-creation-app"
    }


]

export default projectCardData