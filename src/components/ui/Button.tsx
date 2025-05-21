import { twMerge } from "tailwind-merge"
import type { buttonProps } from "../../types"

function Button({children, classNames}: buttonProps) {
  return (
    <button className={twMerge("btn font-plak-regular text-[12px]", classNames)} >
      {children}
    </button>
  )
}
export default Button