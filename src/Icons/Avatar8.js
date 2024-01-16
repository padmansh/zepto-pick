import * as React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    {...props}
  >
    <mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={36} height={36}>
      <rect width={36} height={36} fill="#FFF" rx={72} />
    </mask>
    <g mask="url(#a)">
      <path fill="#baafc4" d="M0 0h36v36H0z" />
      <rect
        width={36}
        height={36}
        transform="rotate(-141 21.615 13.906)"
        fill="#d4c7bf"
        rx={6}
      />
      <g transform="rotate(-9 1.19 -12.089)">
        <path d="M15 19c2 1 4 1 6 0" stroke="#000" strokeLinecap="round" />
        <rect x={10} y={14} width={1.5} height={2} rx={1} fill="#000" />
        <rect x={24} y={14} width={1.5} height={2} rx={1} fill="#000" />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
