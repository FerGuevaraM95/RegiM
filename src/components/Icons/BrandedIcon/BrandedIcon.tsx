import { SVGProps } from "react"

export const BrandedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.545 1H1.636A.636.636 0 0 0 1 1.636v12.728a.636.636 0 0 0 .636.636h1.91V1ZM4.818 15h6.364V1H4.818v14ZM8 12.454a.636.636 0 1 1 0-1.272.636.636 0 0 1 0 1.272Zm0-8.909a.636.636 0 1 1 0 1.273.636.636 0 0 1 0-1.273Zm0 3.819a.636.636 0 1 1 0 1.272.636.636 0 0 1 0-1.272ZM14.364 1h-1.91v14h1.91a.636.636 0 0 0 .636-.636V1.636A.636.636 0 0 0 14.364 1Z"
      fill="#29D2D3"
    />
  </svg>
)
