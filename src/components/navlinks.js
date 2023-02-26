import { Routes, Route } from "react-router-dom";
import Swap from "./swap";
import Pools from "./pools";
import Farms from "./farms";

function Navlinks() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="pools" element={<Pools />} />
        <Route path="farms" element={<Farms />} />
      </Routes>
    </>
  );
}

export default Navlinks;
