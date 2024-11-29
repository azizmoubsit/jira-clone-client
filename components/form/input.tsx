"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormInputProps {
  control: Control<any>;
  name: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  required?: boolean;
  formItemClassName?: string;
}

const FormInput = ({
  control,
  name,
  label,
  type = "text",
  disabled,
  placeholder,
  inputClassName,
  labelClassName,
  required,
  formItemClassName,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemClassName}>
          {label && (
            <FormLabel className={cn("text-xs font-bold", labelClassName)}>
              {label} {required && "*"}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                disabled={disabled}
                placeholder={placeholder}
                className={inputClassName}
                required={required}
                {...field}
                type={showPassword ? "text" : type}
              />
              {type === "password" && (
                <Button
                  onClick={() => setShowPassword(!showPassword)}
                  size="icon"
                  variant="ghost"
                  className="absolute top-0 right-0 hover:bg-transparent"
                  type="button"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
