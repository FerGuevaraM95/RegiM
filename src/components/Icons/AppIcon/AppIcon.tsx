import { SVGProps } from "react"

export const AppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.09 6.727H1.637A.636.636 0 0 1 1 6.091V1.636A.636.636 0 0 1 1.636 1h4.455a.636.636 0 0 1 .636.636v4.455a.636.636 0 0 1-.636.636ZM6.09 15H1.637A.637.637 0 0 1 1 14.364V9.909a.636.636 0 0 1 .636-.636h4.455a.636.636 0 0 1 .636.636v4.455a.636.636 0 0 1-.636.636ZM8.636 1.636H15V2.91H8.636V1.636ZM15 9.91H8.636v1.272H15V9.909ZM15 13.09H8.636v1.274H15V13.09ZM15 4.818H8.636v1.273H15V4.818Z"
      fill="#0876DD"
    />
  </svg>
);

