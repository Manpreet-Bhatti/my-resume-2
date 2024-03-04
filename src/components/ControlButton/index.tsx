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
        className="mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page p-3 text-text transition-colors duration-200 hover:bg-hover-page hover:text-primary focus:bg-hover-page focus:text-primary active:bg-active-page"
      >
        <Icon {...props} className="flex h-auto w-5" />
      </a>
    );
  }

  return (
    <button
      {...props}
      className="mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page p-3 text-text transition-colors duration-200 hover:bg-hover-page hover:text-primary focus:bg-hover-page focus:text-primary active:bg-active-page"
    >
      <Icon className="flex h-auto w-5" />
    </button>
  );
};

export default ControlButton;
