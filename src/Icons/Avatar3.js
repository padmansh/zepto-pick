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
      <path fill="#3b234a" d="M0 0h36v36H0z" />
      <rect
        width={36}
        height={36}
        transform="rotate(87 18.08 14.92)"
        fill="#baafc4"
        rx={36}
      />
      <g transform="rotate(7 47.2 -41.224)">
        <path d="M15 19c2 1 4 1 6 0" stroke="#000" strokeLinecap="round" />
        <rect x={12} y={14} width={1.5} height={2} rx={1} fill="#000" />
        <rect x={22} y={14} width={1.5} height={2} rx={1} fill="#000" />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
