import * as React from "react";

type TechIconProps = React.SVGProps<SVGSVGElement>;

export const TechIcon = ({
  width = 32,
  height = 32,
  ...props
}: TechIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      {...props}
    >
      <g color="#000" transform="translate(680.992 -1101.38)">
        <path
          fill="#2b4255"
          d="M-676.018 89.018A.98.98 0 0 0-677 90V104.018h24V90a.98.98 0 0 0-.982-.982h-22.036z"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          transform="translate(0 1020.362)"
        />
        <path
          fill="#4bbfeb"
          d="M-675.961 1110.533h21.923v12.846h-21.923z"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
        <path
          fill="#576d7e"
          d="M-650.983 1124.345a2.03 2.03 0 0 1-2.034 2.034h-23.95a2.03 2.03 0 0 1-2.033-2.034z"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
        <path
          fill="#cad1d8"
          d="M-662.338 1124.345c0 .516-.415.931-.93.931h-3.447a.929.929 0 0 1-.93-.93"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
        <path
          fill="#f05542"
          d="M-665.741 1112.38v.915c-.404.091-.79.249-1.141.468l-.644-.644-1.157 1.157.646.645c-.22.351-.38.736-.472 1.14h-.914v1.637h.916c.09.403.249.79.468 1.14l-.644.645 1.157 1.156.645-.645c.35.22.736.38 1.14.471v.914h1.636v-.916c.404-.09.79-.249 1.141-.468l.644.644 1.157-1.156-.646-.646c.22-.35.38-.736.472-1.14h.914v-1.636h-.916a3.679 3.679 0 0 0-.468-1.14l.644-.645-1.157-1.157-.645.646c-.35-.22-.736-.38-1.14-.472v-.914z"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
        <circle
          cx={-664.923}
          cy={1116.879}
          r={1}
          fill="#e9eded"
          stroke="#000"
          strokeDashoffset={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        />
      </g>
    </svg>
  );
};
