import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
    <NavBar/>
    {/* <DaisyNav/> */}
    {/* <h1 className="text-7xl">Vite + React</h1> */}
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    </>
  );
}

export default App;
