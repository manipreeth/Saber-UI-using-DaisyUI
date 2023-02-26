import React from "react";

function Farms() {
  return (
    <div className="mt-24 text-white ">
      <h1 className="font-bold text-2xl m-1  mb-5">Farms</h1>
      <div className=" card p-3 farmsCard">
        <h2 className="text-md font-bold m-1">
          Multi rewards yield farming available on Quarry Protocol!
        </h2>
        <p className="text-sm m-1">
          Saber's rewards program is built on Quarry, an audited protocol for
          issuing liquidity mining rewards.
        </p>
        <a
          href="https://app.quarry.so/#/rewarders/rXhAofQCT7NN9TUqigyEAUzV1uLL4boeD8CRkNBSkYk/quarries"
          target="_blank"
          rel="noreferrer"
          className="flex m-1 text-sm underline"
        >
          <span>Farm SBR on Quarry</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            className="m-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
          </svg>
        </a>
      </div>
      <div className="flex justify-between m-1 mt-5">
        <span className="text-xl">Last SBR Price: $0.00127</span>
        <a
          href="https://dex.aldrin.com/chart/spot/SBR_USDC"
          target="_blank"
          rel="noreferrer"
          className="flex text-sm underline text-[#868f97]"
        >
          <span>View on Aldrin</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="0.8em"
            width="0.8em"
            className="m-1 text-[#868f97]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
          </svg>
        </a>
      </div>
      <p className="m-1 mt-5 text-sm text-[#868f97]">
        There are no farms available.
      </p>
    </div>
  );
}

export default Farms;
