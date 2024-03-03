import * as React from "react";

interface PaperProps {
  children: React.ReactNode;
  classNames?: string;
}

const Paper: React.FC<PaperProps> = ({
  children,
  classNames = "",
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`box-border h-[11in] w-[8.5in] rounded-lg bg-page transition-[background-color] duration-200 print:rounded-none ${classNames}`}
    >
      {children}
    </div>
  );
};

export default Paper;
