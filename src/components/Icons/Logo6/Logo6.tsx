import { SVGProps } from "react"

export const Logo6 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.97 3.637v20.417c0 2.284 1.577 3.557 3.25 3.557 1.546 0 3.247-1.083 3.247-3.557V3.792c0-2.095-1.547-3.403-3.248-3.403-1.701 0-3.248 1.443-3.248 3.248Z"
        fill="#F9AB00"
      />
      <path
        d="M9.464 14v10.054c0 2.284 1.576 3.557 3.248 3.557 1.547 0 3.248-1.082 3.248-3.557v-9.9c0-2.094-1.547-3.402-3.248-3.402-1.701 0-3.248 1.443-3.248 3.248ZM4.205 27.611a3.248 3.248 0 1 0 0-6.496 3.248 3.248 0 0 0 0 6.496Z"
        fill="#E37400"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.833)" d="M0 0h23.758v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
