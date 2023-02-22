import { SVGProps } from "react"

export const Logo2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M15.5 31.4c8.505 0 15.4-6.895 15.4-15.4S24.005.6 15.5.6.1 7.495.1 16s6.895 15.4 15.4 15.4Z"
        fill="#2CA01C"
      />
      <path
        d="M4.378 16a5.99 5.99 0 0 0 5.989 5.989h.855v-2.225h-.855a3.764 3.764 0 1 1 0-7.528h2.053V23.87a2.224 2.224 0 0 0 2.225 2.225V10.01h-4.278A5.989 5.989 0 0 0 4.377 16Zm16.256-5.989h-.856v2.225h.856a3.764 3.764 0 1 1 0 7.528H18.58V8.13a2.224 2.224 0 0 0-2.224-2.225V21.99h4.277a5.988 5.988 0 1 0 0-11.978Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.1 .6)" d="M0 0h30.8v30.8H0z" />
      </clipPath>
    </defs>
  </svg>
);
