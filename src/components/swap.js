import React from "react";

function Swap() {
  return (
    <>
      {/* Swap heading */}
      <div className="flex justify-between m-2 mb-5">
        <h1 className="font-bold text-3xl text-white mt-1">Swap</h1>
        <div className="btn rounded-full ">
          <button>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.25 0.75C2.25 0.3375 1.9125 0 1.5 0C1.0875 0 0.75 0.3375 0.75 0.75V3H2.25V0.75ZM2.25 3.75H0.75C0.3375 3.75 0 4.0875 0 4.5V6C0 6.4125 0.3375 6.75 0.75 6.75H2.25C2.6625 6.75 3 6.4125 3 6V4.5C3 4.0875 2.6625 3.75 2.25 3.75ZM11.25 0.75C11.25 0.3375 10.9125 0 10.5 0C10.0875 0 9.75 0.3375 9.75 0.75V2.25H11.25V0.75ZM6.75 0.75C6.75 0.3375 6.4125 0 6 0C5.5875 0 5.25 0.3375 5.25 0.75V5.25H6.75V0.75ZM0.75 11.25C0.75 11.6625 1.0875 12 1.5 12C1.9125 12 2.25 11.6625 2.25 11.25V7.5H0.75V11.25ZM11.25 3H9.75C9.3375 3 9 3.3375 9 3.75V5.25C9 5.6625 9.3375 6 9.75 6H11.25C11.6625 6 12 5.6625 12 5.25V3.75C12 3.3375 11.6625 3 11.25 3ZM9.75 11.25C9.75 11.6625 10.0875 12 10.5 12C10.9125 12 11.25 11.6625 11.25 11.25V6.75H9.75V11.25ZM6.75 6H5.25C4.8375 6 4.5 6.3375 4.5 6.75V8.25C4.5 8.6625 4.8375 9 5.25 9H6.75C7.1625 9 7.5 8.6625 7.5 8.25V6.75C7.5 6.3375 7.1625 6 6.75 6ZM5.25 11.25C5.25 11.6625 5.5875 12 6 12C6.4125 12 6.75 11.6625 6.75 11.25V9.75H5.25V11.25Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Swap Info Card */}
      <div className="card w-full bg-neutral border-t-blue-700 border-t-4 text-neutral-content mb-6">
        <div className="card-body r p-0.5 p-1.5">
          <div className="card-actions">
            <div className="swap-card p-2.5 text-left">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="2m"
                width="2em"
                className="text-blue-500 infobtn float-left mt-2.5 md:mr-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
              <p className="swap-card-info ml-10 md:ml-16 l:ml-10">
                Saber has recently migrated to new infrastructure. If you
                encounter any issues, use the old application at&nbsp;
                <a
                  href="https://legacy.saber.so"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  legacy.saber.so
                </a>
                .
              </p>
              <p className="swap-card-info mt-3 ml-10 md:ml-16">
                Please report any bugs to our&nbsp;
                <a
                  href="https://chat.saber.so"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  Discord
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swap - Exchange */}
      <div className="exchange relative rounded-2xl ">
        {/* ---------- Swap - Exchange - DIV1-------- */}
        <div className="exchange-div1 rounded-t-3xl text-white bg-black p-6 flex justify-between flex-wrap ">
          <input
            type="number"
            className="bg-[#1d1e23] mb-1 rounded-2xl text-xl w-5/12 p-3.5"
          />
          <input
            type="number"
            placeholder="0.00"
            className=" rounded-2xl text-right scndinpt text-3xl w-5/12 p-3.5"
          />
        </div>

        {/* ---------- Swap - Exchange - DArrow ---------- */}
        <div className="exchangeDarrow flex justify-center absolute dArrow left-1/2 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1.5em"
            width="1.5em"
            className="bg-black text-white  rounded"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
          </svg>
        </div>

        {/* ---------- Swap - Exchange - DIV2-------- */}
        <div className="exchange-div2 bg-black text-white p-6 flex justify-between flex-wrap ">
          <input
            type="number"
            className="exchange-input1 text-xl w-5/12 rounded-2xl bg-[#1d1e23] p-3.5"
          />
          <input
            type="number"
            placeholder="0.00"
            className="text-right rounded-2xl scndinpt text-3xl w-5/12 p-3.5"
          />
        </div>

        {/* ---------- Swap - Exchange - DIV3-------- */}
        <div className="exchange-div3 bg-neutral flex justify-between rounded-b-xl p-1 text-white">
          <div class="flex ">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentcolor"
              xmlns="http://www.w3.org/2000/svg"
              className="m-3"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3.7425H8.6775L7.71 4.71C7.575 4.8525 7.4925 5.04 7.4925 5.2425C7.4925 5.655 7.83 5.9925 8.2425 5.9925C8.4525 5.9925 8.64 5.91 8.775 5.775L11.0175 3.525C11.1525 3.39 11.235 3.2025 11.235 2.9925C11.235 2.7825 11.1525 2.595 11.0175 2.46L8.775 0.21C8.6325 0.0825 8.445 0 8.2425 0C7.83 0 7.4925 0.3375 7.4925 0.75C7.4925 0.96 7.575 1.1475 7.71 1.2825L8.6775 2.25H1.5C1.0875 2.25 0.75 2.5875 0.75 3C0.7575 3.4125 1.0875 3.7425 1.5 3.7425ZM10.5 8.2575H3.3225L4.29 7.29C4.425 7.1475 4.5075 6.96 4.5075 6.7575C4.5075 6.345 4.17 6.0075 3.7575 6.0075C3.5475 6.0075 3.36 6.09 3.225 6.225L0.9825 8.475C0.8475 8.61 0.765 8.7975 0.765 9C0.765 9.21 0.8475 9.3975 0.9825 9.5325L3.225 11.7825C3.3675 11.9175 3.555 12 3.7575 12C4.17 12 4.5075 11.6625 4.5075 11.25C4.5075 11.04 4.425 10.8525 4.29 10.7175L3.3225 9.75H10.5C10.9125 9.75 11.25 9.4125 11.25 9C11.25 8.5875 10.9125 8.2575 10.5 8.2575Z"
              ></path>
            </svg>
            <span className="m-1">Exchange Rate</span>
          </div>
          <div className="m-1">
            <span>No route found</span>
          </div>
        </div>
      </div>

      {/* Swap - Connect Wallet */}
      <div className="mt-6 p-4 w-full flex justify-center rounded-md swapCW">
        <button className="text-white font-bold">CONNECT WALLET</button>
      </div>
    </>
  );
}
export default Swap;
