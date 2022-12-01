import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Klaipėda" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://cosmic-faun-333eb7.netlify.app/"
            className="portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            Alina-Marija Lapčiuk
          </a>{" "}
          and{" "}
          <a
            className="gitHub-link"
            href="https://github.com/Mariooona/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            is open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
