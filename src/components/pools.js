import React from "react";

function Pools() {
  return (
    <>
      {/* Pool - Heading */}
      <h1 className="font-bold text-white text-2xl mb-3">Pools</h1>

      {/* Card */}
      <div className="card w-96 poolCard text-white mb-5 w-full">
        <div className="p-3">
          <h2 className="font-bold text-xl pb-3">
            Vote for your favorite pools
          </h2>
          <p>
            Vote for SBR liquidity mining rewards distribution with veSBR. Gauge
            weights determine how much of the daily SBR inflation each farm will
            receive.
          </p>
          <div className="flex pt-3">
            <a
              href="https://tribeca.so/gov/sbr/gauges"
              target="_blank"
              rel="noreferrer noopener"
              className="flex underline hover:text-blue-800"
            >
              <span>Vote on Tribeca</span>
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
        </div>
      </div>

      {/* TVL - sideheading */}
      <span className="text-white flex m-1 mb-5 text-xl">
        TVL:
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          className="tvlLoader m-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z"></path>
        </svg>
      </span>

      {/* search */}
      <div class="text-white poolSearch card p-1 w-6/12 ">
        <div class="flex justify-between">
          <input
            type="text"
            placeholder="Filter by symbol"
            className="p-1 m-1 w-full poolSearch"
            value=""
          />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
      </div>

      {/* Not found img */}
      <div className="mt-10 flex text-white flex-col  poolImg items-center p-5">
        <div className="text-8xl">🤷‍♂️</div>
        <p>No pools found</p>
      </div>
    </>
  );
}
export default Pools;
