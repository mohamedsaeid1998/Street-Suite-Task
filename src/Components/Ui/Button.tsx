import { tailwindCMerge } from "@/Utils/Config/TailwindCMerge";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";

export const buttonVariants = cva("inline-flex items-center justify-center font-extrabold transition duration-200 ", {
  variants: {
    variant: {
      primary: "bg-activeColor text-white hover:bg-gray-800 hover:border-0  shadow-md",
      destructive: "bg-red-500 hover:bg-red-600 text-white shadow-md shadow-red-400/40 ",
    },
    size: {
      xs: "px-2 text-xs h-6",
      sm: "px-3 text-sm h-8",
      md: "px-4 text-md h-10",
      lg: "px-6 text-lg h-12",
    },
    fullWidth: {
      true: "w-full"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "md"
  },


})


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
  isLoading?: boolean
}

const Button = ({ className, children, variant, size, fullWidth, rounded, isLoading, ...rest }: IProps) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (isLoading !== undefined) {
      setLoading(isLoading);
    }
  }, [isLoading])

  return <>
    <button className={`${tailwindCMerge(buttonVariants({ variant, size, fullWidth, rounded }))} ${className} ${loading ? "opacity-70" : ""}`} {...rest} disabled={loading} >
      {loading ? <><span className='animate-spin'>  </span><span>Processing...</span> </> : children}

    </button>
  </>
}

export default Button