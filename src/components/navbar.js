import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar text-[#4d4dff]">
        <div className="navbar-start ">
          {/* ------ Side nav ------- */}
          <div className="dropdown text-[#868f97]">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-2 shadow bg-black  w-52"
            >
              <li className="hover-bordered">
                {/* <a href="/">Item 1</a> */}
                <NavLink to="/">Swap</NavLink>
              </li>
              <li className="hover-bordered">
                {/* <a href="/">Item 1</a> */}
                <NavLink to="/pools">Pools</NavLink>
              </li>
              <li className="hover-bordered">
                {/* <a href="/">Item 1</a> */}
                <NavLink to="/farms">Farms</NavLink>
              </li>
              <li className="hover-bordered">
                <a
                  target="_blank"
                  href="https://tribeca.so/gov/sbr/"
                  class="css-mf9m4x ef2916b1"
                >
                  Vote
                </a>
              </li>
              <li className="hover-bordered" tabIndex={0}>
                <a className="justify-between">
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-black">
                  {/* Docs */}
                  <li>
                    <a
                      href="https://docs.saber.so"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        className="m-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                      </svg>
                      <span>Docs</span>
                    </a>
                  </li>

                  {/* Discord */}
                  <li>
                    <a
                      href="https://chat.saber.so"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="28 16 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d)">
                          <path
                            d="M28 26C28 24.1414 28 23.2121 28.1537 22.4393C28.785 19.2658 31.2658 16.785 34.4393 16.1537C35.2121 16 36.1414 16 38 16C39.8586 16 40.7879 16 41.5607 16.1537C44.7342 16.785 47.215 19.2658 47.8463 22.4393C48 23.2121 48 24.1414 48 26C48 27.8586 48 28.7879 47.8463 29.5607C47.215 32.7342 44.7342 35.215 41.5607 35.8463C40.7879 36 39.8586 36 38 36C36.1414 36 35.2121 36 34.4393 35.8463C31.2658 35.215 28.785 32.7342 28.1537 29.5607C28 28.7879 28 27.8586 28 26Z"
                            fill="url(#paint0_linear)"
                          ></path>
                        </g>
                        <g filter="url(#filter1_d)">
                          <path
                            d="M40.0937 20.8817H40.0634L39.8587 21.0841C41.9587 21.6912 42.9747 22.6394 42.9747 22.6394C41.6213 21.9634 40.4017 21.6255 39.182 21.4889C38.3007 21.3522 37.4194 21.4241 36.6749 21.4889H36.4723C35.9962 21.4889 34.9832 21.6912 33.6257 22.2326C33.1527 22.438 32.8812 22.5726 32.8812 22.5726C32.8812 22.5726 33.8962 21.5587 36.1329 21.0173L35.9962 20.8807C35.9962 20.8807 34.3024 20.8159 32.474 22.1658C32.474 22.1658 30.6455 25.3473 30.6455 29.2696C30.6455 29.2696 31.6585 31.0303 34.4372 31.0971C34.4372 31.0971 34.8424 30.5578 35.2526 30.0832C33.6926 29.6096 33.0848 28.6624 33.0848 28.6624C33.0848 28.6624 33.2205 28.7292 33.4242 28.8648H33.4849C33.5153 28.8648 33.5295 28.88 33.5457 28.8952V28.9012C33.5619 28.9174 33.5761 28.9316 33.6065 28.9316C33.9408 29.0692 34.2751 29.2048 34.5486 29.3364C35.0206 29.5408 35.6274 29.7442 36.372 29.8787C37.3141 30.0154 38.3939 30.0811 39.6237 29.8787C40.2315 29.7421 40.8393 29.6086 41.4471 29.3374C41.8422 29.135 42.3284 28.9326 42.8623 28.5916C42.8623 28.5916 42.2545 29.5387 40.6286 30.0123C40.9629 30.4839 41.4339 31.0243 41.4339 31.0243C44.2136 30.9635 45.2935 29.2028 45.3542 29.2777C45.3542 25.3615 43.5157 22.1739 43.5157 22.1739C41.8594 20.9454 40.3095 20.8989 40.036 20.8989L40.0927 20.8787L40.0937 20.8817ZM40.2639 25.3473C40.9761 25.3473 41.5504 25.9545 41.5504 26.6983C41.5504 27.4471 40.973 28.0542 40.2639 28.0542C39.5548 28.0542 38.9774 27.4471 38.9774 26.7043C38.9794 25.9555 39.5579 25.3504 40.2639 25.3504V25.3473ZM35.6619 25.3473C36.371 25.3473 36.9443 25.9545 36.9443 26.6983C36.9443 27.4471 36.3669 28.0542 35.6578 28.0542C34.9487 28.0542 34.3713 27.4471 34.3713 26.7043C34.3713 25.9555 34.9487 25.3504 35.6578 25.3504L35.6619 25.3473Z"
                            fill="url(#paint1_linear)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d"
                            x="4"
                            y="4"
                            width="68"
                            height="68"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="12"></feOffset>
                            <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <filter
                            id="filter1_d"
                            x="0.645508"
                            y="0.878662"
                            width="74.7087"
                            height="70.2184"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="10"></feOffset>
                            <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <linearGradient
                            id="paint0_linear"
                            x1="28"
                            y1="26"
                            x2="48"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#6B7DC7"></stop>
                            <stop offset="1" stop-color="#465DB9"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="37.9999"
                            y1="20.8787"
                            x2="37.9999"
                            y2="31.0971"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white"></stop>
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0.75"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>Discord</span>
                    </a>
                  </li>

                  {/* Stats */}
                  <li>
                    <a
                      href="https://saber.markets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-1"
                    >
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
                        <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                      </svg>
                      <span>Stats</span>
                    </a>
                  </li>

                  {/* Twitter */}
                  <li>
                    <a
                      href="https://twitter.com/Saber_HQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-1"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="28 16 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_twitter)">
                          <rect
                            x="28"
                            y="16"
                            width="20"
                            height="20"
                            rx="8"
                            fill="url(#paint0_linear_twitter)"
                          ></rect>
                        </g>
                        <g filter="url(#filter1_d_twitter)">
                          <path
                            d="M45.0841 21.5991C44.5597 21.8295 43.9996 21.9865 43.41 22.0581C44.0109 21.6963 44.4731 21.1259 44.6918 20.4454C44.1282 20.7741 43.5036 21.0134 42.8387 21.1466C42.3077 20.5787 41.551 20.2233 40.7106 20.2233C39.1005 20.2233 37.795 21.5281 37.795 23.1355C37.795 23.3665 37.8217 23.5886 37.8702 23.8012C35.4465 23.6869 33.2982 22.5237 31.8606 20.7652C31.6075 21.1928 31.4659 21.6898 31.4659 22.2311C31.4659 23.2439 31.9814 24.1341 32.7625 24.657C32.2843 24.6416 31.8345 24.5101 31.4422 24.2922V24.3283C31.4422 25.7409 32.4455 26.9189 33.7806 27.1872C33.5359 27.2529 33.2775 27.2885 33.0126 27.2885C32.8265 27.2885 32.6481 27.2707 32.4698 27.2375C32.8437 28.3942 33.9187 29.2376 35.1982 29.2613C34.2026 30.0425 32.9409 30.5081 31.582 30.5081C31.3509 30.5081 31.1204 30.4944 30.8887 30.4684C32.1859 31.294 33.7143 31.7767 35.367 31.7767C40.7326 31.7767 43.663 27.337 43.663 23.4932C43.663 23.3694 43.663 23.2445 43.6541 23.1201C44.2236 22.712 44.7208 22.1961 45.112 21.611L45.0841 21.5991Z"
                            fill="url(#paint1_linear_twitter)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_twitter"
                            x="4"
                            y="4"
                            width="68"
                            height="68"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="12"></feOffset>
                            <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <filter
                            id="filter1_d_twitter"
                            x="0.888672"
                            y="0.223297"
                            width="74.2233"
                            height="71.5534"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="10"></feOffset>
                            <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                            ></feColorMatrix>
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            ></feBlend>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <linearGradient
                            id="paint0_linear_twitter"
                            x1="38"
                            y1="16"
                            x2="38"
                            y2="36"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#1DA1F2"></stop>
                            <stop offset="1" stop-color="#0C85CF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_twitter"
                            x1="38.0003"
                            y1="20.2233"
                            x2="38.0003"
                            y2="31.7767"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="white"></stop>
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0.75"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>Twitter</span>
                    </a>
                  </li>

                  {/* Github */}
                  {/* <li>
                  <a
                    href="https://github.com/saber-hq/stable-swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="css-1lxbrvu e15snwr20"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span>GitHub</span>
                  </a>
                </li> */}

                  {/* Medium */}
                  <li>
                    <a
                      href="https://blog.saber.so/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-1"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                      </svg>
                      <span>Medium</span>
                    </a>
                  </li>

                  {/* Forum */}
                  <li>
                    <a
                      href="https://github.com/saber-hq/governance/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-1"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                      </svg>
                      <span>Forum</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* ----- lg-display Logo --- */}
          <div className="lg:flex hidden">
            <a href="/">
              <div class="flex">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8861 1.54432C20.8861 0.967563 20.4185 0.500012 19.8418 0.500012L4.13862 0.5C3.45243 0.5 2.85201 0.599529 2.33736 0.798589C1.82272 1.01296 1.39384 1.29624 1.05075 1.64843C0.693353 2.01592 0.428883 2.42936 0.257335 2.88873C0.0857855 3.36341 8.50456e-06 3.85341 8.50456e-06 4.35872V6.76582C8.50456e-06 7.91933 0.93511 8.85443 2.08862 8.85443H14.6203L8.35446 4.67722H19.8418C20.4185 4.67722 20.8861 4.20966 20.8861 3.63291V1.54432ZM0 20.3417C0 20.9185 0.46755 21.3861 1.0443 21.3861L16.7475 21.3861C17.4337 21.3861 18.0341 21.2865 18.5487 21.0875C19.0634 20.8731 19.4922 20.5898 19.8353 20.2376C20.1927 19.8701 20.4572 19.4567 20.6288 18.9973C20.8003 18.5226 20.8861 18.0327 20.8861 17.5273V15.1202C20.8861 13.9667 19.951 13.0316 18.7975 13.0316H6.26581L12.5316 17.2088H1.0443C0.46755 17.2088 0 17.6764 0 18.2532V20.3417Z"
                  ></path>
                </svg>
                <svg
                  width="71"
                  height="22"
                  viewBox="0 0 71 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-1"
                >
                  <path
                    d="M0.935181 15.3217C1.05823 19.0405 4.18909 21.2827 8.89221 21.2827C13.8278 21.2827 16.8492 18.8491 16.8492 14.9936C16.8492 11.9995 15.0309 10.3178 10.861 9.48383L8.76917 9.06C6.44495 8.59515 5.48792 7.8432 5.48792 6.6264C5.48792 5.17719 6.8551 4.22015 8.89221 4.22015C10.9703 4.22015 12.4332 5.23187 12.5699 6.91351H16.4664C16.3981 3.29047 13.4996 0.884216 8.89221 0.884216C4.50354 0.884216 1.35901 3.27679 1.35901 6.88617C1.35901 9.82562 3.28674 11.7123 7.22424 12.4916L9.30237 12.9018C11.777 13.4077 12.7067 14.1459 12.7067 15.4448C12.7067 16.894 11.2028 17.9604 9.00159 17.9604C6.7594 17.9604 5.09143 16.976 4.83167 15.3217H0.935181ZM22.2644 21.187C24.0964 21.187 25.9148 20.2709 26.7351 18.7123H26.8171V20.9545H30.6726V10.8784C30.6726 7.92523 28.2253 5.98383 24.4656 5.98383C20.5828 5.98383 18.1628 7.9389 18.0124 10.7827H21.6628C21.8542 9.70258 22.7976 8.96429 24.2878 8.96429C25.7917 8.96429 26.7488 9.75726 26.7488 11.1245V12.0952L23.0574 12.3139C19.407 12.5327 17.3562 14.0776 17.3562 16.7436C17.3562 19.3823 19.4753 21.187 22.2644 21.187ZM23.5769 18.3022C22.2234 18.3022 21.321 17.6186 21.321 16.5248C21.321 15.4858 22.1687 14.8159 23.6589 14.7065L26.7488 14.5151V15.5815C26.7488 17.1674 25.3132 18.3022 23.5769 18.3022ZM40.8456 21.187C44.537 21.187 46.7928 18.3432 46.7928 13.6264C46.7928 8.89594 44.5233 6.06586 40.8319 6.06586C38.7401 6.06586 37.1131 7.10492 36.3065 8.84125H36.2245V1.22601H32.2323V20.9545H36.1698V18.4389H36.2518C37.0585 20.1479 38.6991 21.187 40.8456 21.187ZM39.4647 9.26508C41.4471 9.26508 42.7049 10.9604 42.7049 13.6264C42.7049 16.3061 41.4608 17.9741 39.4647 17.9741C37.5233 17.9741 36.2108 16.2787 36.2108 13.6264C36.2108 11.0014 37.537 9.26508 39.4647 9.26508ZM57.458 16.4702C57.0889 17.5912 55.9678 18.3159 54.5049 18.3159C52.4678 18.3159 51.1416 16.8803 51.1416 14.7885V14.5424H61.2451V13.3256C61.2451 8.86859 58.5517 5.98383 54.2861 5.98383C49.9521 5.98383 47.2178 9.01898 47.2178 13.6948C47.2178 18.3842 49.9248 21.269 54.4365 21.269C58.0596 21.269 60.6846 19.3412 61.1221 16.4702H57.458ZM54.3271 8.93695C56.1045 8.93695 57.3213 10.2221 57.4033 12.0952H51.1826C51.3193 10.2631 52.5771 8.93695 54.3271 8.93695ZM62.1896 20.9545H66.1817V12.7651C66.1817 10.7006 67.3302 9.4975 69.2989 9.4975C69.8731 9.4975 70.42 9.5932 70.7481 9.72992V6.21625C70.4747 6.13422 70.0782 6.06586 69.6134 6.06586C67.8907 6.06586 66.6466 7.07758 66.1271 8.93695H66.045V6.29828H62.1896V20.9545Z"
                    fill="#EFEFF7"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* -------- mobile-view Logo  ------ */}
        <div className="flex  navbar-center lg:hidden">
          <a href="/swap">
            <div class="flex">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                className="m-1 "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.8861 1.54432C20.8861 0.967563 20.4185 0.500012 19.8418 0.500012L4.13862 0.5C3.45243 0.5 2.85201 0.599529 2.33736 0.798589C1.82272 1.01296 1.39384 1.29624 1.05075 1.64843C0.693353 2.01592 0.428883 2.42936 0.257335 2.88873C0.0857855 3.36341 8.50456e-06 3.85341 8.50456e-06 4.35872V6.76582C8.50456e-06 7.91933 0.93511 8.85443 2.08862 8.85443H14.6203L8.35446 4.67722H19.8418C20.4185 4.67722 20.8861 4.20966 20.8861 3.63291V1.54432ZM0 20.3417C0 20.9185 0.46755 21.3861 1.0443 21.3861L16.7475 21.3861C17.4337 21.3861 18.0341 21.2865 18.5487 21.0875C19.0634 20.8731 19.4922 20.5898 19.8353 20.2376C20.1927 19.8701 20.4572 19.4567 20.6288 18.9973C20.8003 18.5226 20.8861 18.0327 20.8861 17.5273V15.1202C20.8861 13.9667 19.951 13.0316 18.7975 13.0316H6.26581L12.5316 17.2088H1.0443C0.46755 17.2088 0 17.6764 0 18.2532V20.3417Z"
                ></path>
              </svg>
              <svg
                width="71"
                height="22"
                viewBox="0 0 71 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-1"
              >
                <path
                  d="M0.935181 15.3217C1.05823 19.0405 4.18909 21.2827 8.89221 21.2827C13.8278 21.2827 16.8492 18.8491 16.8492 14.9936C16.8492 11.9995 15.0309 10.3178 10.861 9.48383L8.76917 9.06C6.44495 8.59515 5.48792 7.8432 5.48792 6.6264C5.48792 5.17719 6.8551 4.22015 8.89221 4.22015C10.9703 4.22015 12.4332 5.23187 12.5699 6.91351H16.4664C16.3981 3.29047 13.4996 0.884216 8.89221 0.884216C4.50354 0.884216 1.35901 3.27679 1.35901 6.88617C1.35901 9.82562 3.28674 11.7123 7.22424 12.4916L9.30237 12.9018C11.777 13.4077 12.7067 14.1459 12.7067 15.4448C12.7067 16.894 11.2028 17.9604 9.00159 17.9604C6.7594 17.9604 5.09143 16.976 4.83167 15.3217H0.935181ZM22.2644 21.187C24.0964 21.187 25.9148 20.2709 26.7351 18.7123H26.8171V20.9545H30.6726V10.8784C30.6726 7.92523 28.2253 5.98383 24.4656 5.98383C20.5828 5.98383 18.1628 7.9389 18.0124 10.7827H21.6628C21.8542 9.70258 22.7976 8.96429 24.2878 8.96429C25.7917 8.96429 26.7488 9.75726 26.7488 11.1245V12.0952L23.0574 12.3139C19.407 12.5327 17.3562 14.0776 17.3562 16.7436C17.3562 19.3823 19.4753 21.187 22.2644 21.187ZM23.5769 18.3022C22.2234 18.3022 21.321 17.6186 21.321 16.5248C21.321 15.4858 22.1687 14.8159 23.6589 14.7065L26.7488 14.5151V15.5815C26.7488 17.1674 25.3132 18.3022 23.5769 18.3022ZM40.8456 21.187C44.537 21.187 46.7928 18.3432 46.7928 13.6264C46.7928 8.89594 44.5233 6.06586 40.8319 6.06586C38.7401 6.06586 37.1131 7.10492 36.3065 8.84125H36.2245V1.22601H32.2323V20.9545H36.1698V18.4389H36.2518C37.0585 20.1479 38.6991 21.187 40.8456 21.187ZM39.4647 9.26508C41.4471 9.26508 42.7049 10.9604 42.7049 13.6264C42.7049 16.3061 41.4608 17.9741 39.4647 17.9741C37.5233 17.9741 36.2108 16.2787 36.2108 13.6264C36.2108 11.0014 37.537 9.26508 39.4647 9.26508ZM57.458 16.4702C57.0889 17.5912 55.9678 18.3159 54.5049 18.3159C52.4678 18.3159 51.1416 16.8803 51.1416 14.7885V14.5424H61.2451V13.3256C61.2451 8.86859 58.5517 5.98383 54.2861 5.98383C49.9521 5.98383 47.2178 9.01898 47.2178 13.6948C47.2178 18.3842 49.9248 21.269 54.4365 21.269C58.0596 21.269 60.6846 19.3412 61.1221 16.4702H57.458ZM54.3271 8.93695C56.1045 8.93695 57.3213 10.2221 57.4033 12.0952H51.1826C51.3193 10.2631 52.5771 8.93695 54.3271 8.93695ZM62.1896 20.9545H66.1817V12.7651C66.1817 10.7006 67.3302 9.4975 69.2989 9.4975C69.8731 9.4975 70.42 9.5932 70.7481 9.72992V6.21625C70.4747 6.13422 70.0782 6.06586 69.6134 6.06586C67.8907 6.06586 66.6466 7.07758 66.1271 8.93695H66.045V6.29828H62.1896V20.9545Z"
                  fill="#EFEFF7"
                ></path>
              </svg>
            </div>
          </a>
        </div>

        {/* -------- Desktop Nav --------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#868f97]">
              <NavLink to="/">Swap</NavLink>
            </li>
            <li className="text-[#868f97]">
              <NavLink to="/pools">Pools</NavLink>
            </li>
            <li className="text-[#868f97]">
              <NavLink to="/farms">Farms</NavLink>
            </li>
            <li>
              <a
                target="_blank"
                href="https://tribeca.so/gov/sbr/"
                className="text-[#868f97]"
              >
                Vote
              </a>
            </li>
            <li tabIndex={0} className="moreLink ">
              <a className="text-[#868f97]">
                More
                <svg
                  className="fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-black p-4 z-10 text-[#868f97]">
                {/* Docs */}
                <li>
                  <a
                    href="https://docs.saber.so"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                    </svg>
                    <span>Docs</span>
                  </a>
                </li>

                {/* Discord */}
                <li>
                  <a
                    href="https://chat.saber.so"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="28 16 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M28 26C28 24.1414 28 23.2121 28.1537 22.4393C28.785 19.2658 31.2658 16.785 34.4393 16.1537C35.2121 16 36.1414 16 38 16C39.8586 16 40.7879 16 41.5607 16.1537C44.7342 16.785 47.215 19.2658 47.8463 22.4393C48 23.2121 48 24.1414 48 26C48 27.8586 48 28.7879 47.8463 29.5607C47.215 32.7342 44.7342 35.215 41.5607 35.8463C40.7879 36 39.8586 36 38 36C36.1414 36 35.2121 36 34.4393 35.8463C31.2658 35.215 28.785 32.7342 28.1537 29.5607C28 28.7879 28 27.8586 28 26Z"
                          fill="url(#paint0_linear)"
                        ></path>
                      </g>
                      <g filter="url(#filter1_d)">
                        <path
                          d="M40.0937 20.8817H40.0634L39.8587 21.0841C41.9587 21.6912 42.9747 22.6394 42.9747 22.6394C41.6213 21.9634 40.4017 21.6255 39.182 21.4889C38.3007 21.3522 37.4194 21.4241 36.6749 21.4889H36.4723C35.9962 21.4889 34.9832 21.6912 33.6257 22.2326C33.1527 22.438 32.8812 22.5726 32.8812 22.5726C32.8812 22.5726 33.8962 21.5587 36.1329 21.0173L35.9962 20.8807C35.9962 20.8807 34.3024 20.8159 32.474 22.1658C32.474 22.1658 30.6455 25.3473 30.6455 29.2696C30.6455 29.2696 31.6585 31.0303 34.4372 31.0971C34.4372 31.0971 34.8424 30.5578 35.2526 30.0832C33.6926 29.6096 33.0848 28.6624 33.0848 28.6624C33.0848 28.6624 33.2205 28.7292 33.4242 28.8648H33.4849C33.5153 28.8648 33.5295 28.88 33.5457 28.8952V28.9012C33.5619 28.9174 33.5761 28.9316 33.6065 28.9316C33.9408 29.0692 34.2751 29.2048 34.5486 29.3364C35.0206 29.5408 35.6274 29.7442 36.372 29.8787C37.3141 30.0154 38.3939 30.0811 39.6237 29.8787C40.2315 29.7421 40.8393 29.6086 41.4471 29.3374C41.8422 29.135 42.3284 28.9326 42.8623 28.5916C42.8623 28.5916 42.2545 29.5387 40.6286 30.0123C40.9629 30.4839 41.4339 31.0243 41.4339 31.0243C44.2136 30.9635 45.2935 29.2028 45.3542 29.2777C45.3542 25.3615 43.5157 22.1739 43.5157 22.1739C41.8594 20.9454 40.3095 20.8989 40.036 20.8989L40.0927 20.8787L40.0937 20.8817ZM40.2639 25.3473C40.9761 25.3473 41.5504 25.9545 41.5504 26.6983C41.5504 27.4471 40.973 28.0542 40.2639 28.0542C39.5548 28.0542 38.9774 27.4471 38.9774 26.7043C38.9794 25.9555 39.5579 25.3504 40.2639 25.3504V25.3473ZM35.6619 25.3473C36.371 25.3473 36.9443 25.9545 36.9443 26.6983C36.9443 27.4471 36.3669 28.0542 35.6578 28.0542C34.9487 28.0542 34.3713 27.4471 34.3713 26.7043C34.3713 25.9555 34.9487 25.3504 35.6578 25.3504L35.6619 25.3473Z"
                          fill="url(#paint1_linear)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d"
                          x="4"
                          y="4"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="12"></feOffset>
                          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="filter1_d"
                          x="0.645508"
                          y="0.878662"
                          width="74.7087"
                          height="70.2184"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="10"></feOffset>
                          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear"
                          x1="28"
                          y1="26"
                          x2="48"
                          y2="26"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#6B7DC7"></stop>
                          <stop offset="1" stop-color="#465DB9"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="37.9999"
                          y1="20.8787"
                          x2="37.9999"
                          y2="31.0971"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white"></stop>
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.75"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>Discord</span>
                  </a>
                </li>

                {/* Stats */}
                <li>
                  <a
                    href="https://saber.markets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1"
                  >
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
                      <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                    </svg>
                    <span>Stats</span>
                  </a>
                </li>

                {/* Twitter */}
                <li>
                  <a
                    href="https://twitter.com/Saber_HQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="28 16 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_twitter)">
                        <rect
                          x="28"
                          y="16"
                          width="20"
                          height="20"
                          rx="8"
                          fill="url(#paint0_linear_twitter)"
                        ></rect>
                      </g>
                      <g filter="url(#filter1_d_twitter)">
                        <path
                          d="M45.0841 21.5991C44.5597 21.8295 43.9996 21.9865 43.41 22.0581C44.0109 21.6963 44.4731 21.1259 44.6918 20.4454C44.1282 20.7741 43.5036 21.0134 42.8387 21.1466C42.3077 20.5787 41.551 20.2233 40.7106 20.2233C39.1005 20.2233 37.795 21.5281 37.795 23.1355C37.795 23.3665 37.8217 23.5886 37.8702 23.8012C35.4465 23.6869 33.2982 22.5237 31.8606 20.7652C31.6075 21.1928 31.4659 21.6898 31.4659 22.2311C31.4659 23.2439 31.9814 24.1341 32.7625 24.657C32.2843 24.6416 31.8345 24.5101 31.4422 24.2922V24.3283C31.4422 25.7409 32.4455 26.9189 33.7806 27.1872C33.5359 27.2529 33.2775 27.2885 33.0126 27.2885C32.8265 27.2885 32.6481 27.2707 32.4698 27.2375C32.8437 28.3942 33.9187 29.2376 35.1982 29.2613C34.2026 30.0425 32.9409 30.5081 31.582 30.5081C31.3509 30.5081 31.1204 30.4944 30.8887 30.4684C32.1859 31.294 33.7143 31.7767 35.367 31.7767C40.7326 31.7767 43.663 27.337 43.663 23.4932C43.663 23.3694 43.663 23.2445 43.6541 23.1201C44.2236 22.712 44.7208 22.1961 45.112 21.611L45.0841 21.5991Z"
                          fill="url(#paint1_linear_twitter)"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_twitter"
                          x="4"
                          y="4"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="12"></feOffset>
                          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <filter
                          id="filter1_d_twitter"
                          x="0.888672"
                          y="0.223297"
                          width="74.2233"
                          height="71.5534"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="10"></feOffset>
                          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_twitter"
                          x1="38"
                          y1="16"
                          x2="38"
                          y2="36"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1DA1F2"></stop>
                          <stop offset="1" stop-color="#0C85CF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_twitter"
                          x1="38.0003"
                          y1="20.2233"
                          x2="38.0003"
                          y2="31.7767"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white"></stop>
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.75"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>

                {/* Github */}
                {/* <li>
                  <a
                    href="https://github.com/saber-hq/stable-swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="css-1lxbrvu e15snwr20"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span>GitHub</span>
                  </a>
                </li> */}

                {/* Medium */}
                <li>
                  <a
                    href="https://blog.saber.so/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                    </svg>
                    <span>Medium</span>
                  </a>
                </li>

                {/* Forum */}
                <li>
                  <a
                    href="https://github.com/saber-hq/governance/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    <span>Forum</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* ---- Desktop view connect btn --- */}
        <div className="navbar-end  hidden md:flex ">
          <a href="/" className="btn">
            Connect Wallet
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
