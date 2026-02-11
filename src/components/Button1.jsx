import React from "react";
import "./Button1.css";

export const Button1 = () => {
  return (
    <div>
      <button className="cta">
        <span className="span">NEXT</span>
        <span className="second">
          <svg
            width="50px"
            height="20px"
            viewBox="0 0 66 43"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="arrow"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {/* your paths stay the same except class -> className */}

              <path
                className="one"
                d="M40.1543933,3.89485454 ..."
                fill="#FFFFFF"
              />
              <path
                className="two"
                d="M20.1543933,3.89485454 ..."
                fill="#FFFFFF"
              />
              <path
                className="three"
                d="M0.154393339,3.89485454 ..."
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
};