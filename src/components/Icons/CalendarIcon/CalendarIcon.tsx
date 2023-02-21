import { SVGProps } from "react"

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4.182V1.636A.636.636 0 0 0 14.364 1H1.636A.636.636 0 0 0 1 1.636v2.546h14ZM1 5.455v8.909a.636.636 0 0 0 .636.636h3.182V5.455H1ZM6.09 15h8.274a.636.636 0 0 0 .636-.636v-8.91H6.09V15Z"
      fill="#0876DD"
    />
  </svg>
);
