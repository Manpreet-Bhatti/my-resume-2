import * as React from "react";
import { IconType } from "react-icons";

type ControlButtonProps = {
  icon: IconType;
  link?: string;
  [key: string]: any;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  icon: Icon,
  link,
  ...props
}) => {
  if (link) {
    return (
      <a
        {...props}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-primary-high active:bg-primary-high-active dark:hover:bg-dark-primary-hover dark:active:bg-dark-primary-high-active mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page p-3 text-text shadow-[0_0_1rem_rgba(0,0,0,0.1)] transition-colors duration-200 hover:text-primary dark:bg-dark-page dark:text-dark-text dark:hover:text-primary"
      >
        <Icon {...props} className="flex h-auto w-5" />
      </a>
    );
  }

  return (
    <button
      {...props}
      className="hover:bg-primary-high active:bg-primary-high-active dark:hover:bg-dark-primary-hover dark:active:bg-dark-primary-high-active mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page p-3 text-text shadow-[0_0_1rem_rgba(0,0,0,0.1)] transition-colors duration-200 hover:text-primary dark:bg-dark-page dark:text-dark-text dark:hover:text-primary"
    >
      <Icon className="flex h-auto w-5" />
    </button>
  );
};

export default ControlButton;
