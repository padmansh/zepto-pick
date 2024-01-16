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
      <path fill="#c3bbc9" d="M0 0h36v36H0z" />
      <rect
        width={36}
        height={36}
        transform="rotate(25 6.223 18.245) scale(1.1)"
        fill="#3b234a"
        rx={36}
      />
      <g transform="rotate(-5 51.856 30.952)" fill="#FFF">
        <path d="M13 20a1 .75 0 0 0 10 0" />
        <rect x={14} y={14} width={1.5} height={2} rx={1} />
        <rect x={20} y={14} width={1.5} height={2} rx={1} />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
