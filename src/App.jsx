import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const fetchCountries = async () =>{
  const res =await fetch("https://openapi.programming-hero.com/api/all")
  return res.json();
}
const countriesPromise = fetchCountries();
function App() {
  return (
    <>
      <Suspense fallback={<p>countries are loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
