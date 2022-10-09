import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://cosmic-faun-333eb7.netlify.app/"
          className="portfolio-link"
          rel="Portfolio page link"
          target="_blank"
        >
          Alina-Marija Lapčiuk
        </a>{" "}
        and{" "}
        <a
          className="gitHub-link"
          href="https://github.com/Mariooona/react-weather-app"
          rel="GitHub link"
          target="_blank"
        >
          is open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
