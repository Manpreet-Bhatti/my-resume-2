import * as React from "react";
import { IconType } from "react-icons";

type ControlButtonProps = {
  icon: IconType;
  link?: string;
  action?: () => void;
  [key: string]: any;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  icon: Icon,
  link,
  action,
  ...props
}) => {
  if (link) {
    return (
      <a
        {...props}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-hover-page active:bg-active-page focus:bg-hover-page mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page text-text transition-colors duration-200 hover:text-primary focus:text-primary"
      >
        <Icon {...props} className="flex h-auto w-5" />
      </a>
    );
  }

  return (
    <button
      {...props}
      className="hover:bg-hover-page active:bg-active-page focus:bg-hover-page mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-page text-text transition-colors duration-200 hover:text-primary focus:text-primary"
    >
      <Icon className="flex h-auto w-5" />
    </button>
  );
};

export default ControlButton;
