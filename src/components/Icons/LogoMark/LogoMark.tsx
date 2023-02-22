import { SVGProps } from "react"

export const LogoMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35.976 45.333H10.594A2.587 2.587 0 0 1 8 42.753V5.247a2.587 2.587 0 0 1 2.594-2.58h14.962C35.517 2.667 40 9.727 40 16.786c0 6.006-3.175 11.27-10.086 13.004l8.178 11.47c1.219 1.71-.01 4.073-2.116 4.073Z"
      fill="url(#a)"
    />
    <path
      opacity={0.64}
      d="M10.667 2.667H16v42.666h-5.333C9.194 45.333 8 44.178 8 42.753V5.247c0-1.425 1.194-2.58 2.667-2.58Z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={24.498}
        y1={2.667}
        x2={24.498}
        y2={45.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2ED4FF" />
        <stop offset={1} stopColor="#08F" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={15.269}
        y1={2.667}
        x2={15.269}
        y2={45.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3525D3" />
        <stop offset={1} stopColor="#3525D3" stopOpacity={0.24} />
      </linearGradient>
    </defs>
  </svg>
);