import { SVGProps } from "react"

export const EngagementIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#29D2D3">
      <path d="M13.727 15.636H8A.636.636 0 0 1 7.364 15v-1.273A.636.636 0 0 1 8 13.091h5.727a.636.636 0 0 1 .636.636V15a.636.636 0 0 1-.636.636ZM13.727.364H2.273A.636.636 0 0 0 1.636 1v1.273a.636.636 0 0 0 .637.636h11.454a.636.636 0 0 0 .636-.636V1a.636.636 0 0 0-.636-.636ZM13.727 4.182H2.273a.636.636 0 0 0-.637.636v6.364a.636.636 0 0 0 .637.636h11.454a.636.636 0 0 0 .636-.636V4.818a.636.636 0 0 0-.636-.636Z" />
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
);
