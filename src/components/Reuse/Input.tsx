import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Omit<HTMLInputProps, "type"> {
  type?: HTMLInputProps["type"];
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label,
      containerClassName = "",
      labelClassName = "",
      inputClassName = "",
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseInputClasses = [
      "w-full px-4 py-3 md:px-6 md:py-4",
      "text-base md:text-lg text-gray-900",
      "border border-formBorder rounded-[30px]",
      "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
      "transition-all duration-200",
      "placeholder:text-gray-400",
      className,
      inputClassName,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        {label && (
          <label
            className={`text-sm md:text-base font-medium text-gray-700 ${labelClassName}`}
          >
            {label}
            {props.required && <span className="ml-1 text-green-600">*</span>}
          </label>
        )}
        <input type={type} ref={ref} className={baseInputClasses} {...props} />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
