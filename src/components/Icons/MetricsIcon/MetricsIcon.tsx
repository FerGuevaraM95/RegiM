import { SVGProps } from "react"

export const MetricsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#29D2D3">
      <path d="M11.818 6.727h3.818l-1.909-2.545-1.909 2.545Zm0 2.546h3.818l-1.909 2.545-1.909-2.545ZM1 .364h3.818v15.272H1A.637.637 0 0 1 .364 15V1A.636.636 0 0 1 1 .364ZM6.09.364H9.91a.636.636 0 0 1 .636.636v14a.637.637 0 0 1-.636.636H6.091V.364Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.364 .364)"
          d="M0 0h15.273v15.273H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

