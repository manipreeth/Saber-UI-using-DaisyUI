import "./App.css";
import Navbar from "./components/navbar";
// import Swap from "./components/swap";
// import Pools from "./components/pools";
// import Farms from "./components/farms";
import Navlinks from "./components/navlinks";

function App() {
  return (
    <div className="App min-h-screen bg-[#1d1e23] overflow-hidden">
      <Navbar />
      <div className="body-content h-max m-auto mt-8 pb-8 ">
        {/* <Swap />
        <Pools />
        <Farms /> */}
        <Navlinks />
      </div>
    </div>
  );
}

export default App;
