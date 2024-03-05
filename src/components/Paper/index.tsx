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
      className={`box-border h-[11in] w-[8.5in] bg-page p-5 shadow-[0_0_1rem_rgba(0,0,0,0.1)] transition-colors duration-200 dark:bg-dark-page ${classNames}`}
    >
      {children}
    </div>
  );
};

export default Paper;
