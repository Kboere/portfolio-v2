"use client";

import { useEffect } from "react";

const animLogo = () => {
  useEffect(() => {
    const logo = document.getElementById("Kevin_Boere_Portfolio");
    const layerOne = document.querySelector("svg");

    const showLogo = () => {
      logo.classList.add("show");
    };

    const noshowLogo = () => {
      logo.classList.remove("show");
    };

    layerOne.addEventListener("mouseover", showLogo);
    layerOne.addEventListener("mouseout", noshowLogo);

    return () => {
      layerOne.removeEventListener("mouseover", showLogo);
      layerOne.removeEventListener("mouseout", noshowLogo);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249"
      height="65"
      viewBox="0 0 249 65"
    >
      <g id="Group_8" data-name="Group 8" transform="translate(-50 -34)">
        <text
          id="Kevin_Boere_Portfolio"
          data-name="Kevin Boere Portfolio"
          transform="translate(105 63)"
          fill="#5a4e42"
          font-size="29"
          font-family="Avenir-Heavy, Avenir"
          font-weight="800"
        >
          <tspan x="0" y="0">
            KEVIN BOERE
          </tspan>
          <tspan
            font-size="24"
            font-family="Avenir-Light, Avenir"
            font-weight="300"
          >
            <tspan x="0" y="27">
              PORTFOLIO
            </tspan>
          </tspan>
        </text>
        <g id="Laag_1" data-name="Laag 1" transform="translate(50 40)">
          <g id="Group_4" data-name="Group 4">
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(0.054 1.224)"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M41.435,10.2a.439.439,0,0,1,.31.75l-36.2,36.2a.353.353,0,0,1-.275.139A.452.452,0,0,1,4.8,46.84V34.123a.443.443,0,0,1,.13-.312L28.608,10.329a.436.436,0,0,1,.31-.128h12.52m0-4.549H28.918A4.985,4.985,0,0,0,25.406,7.1L1.725,30.579A4.987,4.987,0,0,0,.25,34.121V46.837a4.985,4.985,0,0,0,5.024,5,4.881,4.881,0,0,0,3.49-1.471l36.2-36.2A4.989,4.989,0,0,0,41.435,5.65h0Z"
                transform="translate(-0.25 -5.65)"
                fill="#5a4e42"
              />
            </g>
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(18.066 29.924)"
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M97.474,142.679a1.258,1.258,0,0,1,.9.368l8.241,8.141a1.276,1.276,0,0,1-.9,2.184H89.231a1.276,1.276,0,0,1-.9-2.184l8.241-8.141a1.249,1.249,0,0,1,.9-.368m0-4.549a5.813,5.813,0,0,0-4.094,1.681l-8.241,8.141a5.827,5.827,0,0,0,4.094,9.972h16.484a5.827,5.827,0,0,0,4.094-9.972l-8.241-8.141a5.813,5.813,0,0,0-4.094-1.681h0Z"
                transform="translate(-83.393 -138.13)"
                fill="#5a4e42"
              />
            </g>
            <g id="Group_3" data-name="Group 3">
              <path
                id="Path_6"
                data-name="Path 6"
                d="M6.831,4.549A2.281,2.281,0,1,1,4.549,6.831,2.283,2.283,0,0,1,6.831,4.549M6.831,0a6.831,6.831,0,1,0,6.831,6.831A6.832,6.832,0,0,0,6.831,0h0Z"
                fill="#5a4e42"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default animLogo;
