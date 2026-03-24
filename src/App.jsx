import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};
const countriesPromise = fetchCountries();
function App() {
  return (
    <div>
      <Suspense fallback={<p>countries are loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  );
}

export default App;
