import * as React from "react";
import type { IconType } from "react-icons";

type ControlButtonProps = {
  icon: IconType;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  "aria-label"?: string;
  title?: string;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  icon: Icon,
  link,
  onClick,
  ...props
}) => {
  if (link) {
    return (
      <a
        {...props}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-[#8b5a2b] p-3 text-dark-primary shadow-[0_0_1rem_rgba(0,0,0,0.1)] transition-colors duration-200 hover:bg-[#7d5126] active:bg-[#6f4821]"
      >
        <Icon className="flex h-auto w-5" />
      </a>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className="mt-2 box-border block aspect-square cursor-pointer rounded-full border-none bg-[#8b5a2b] p-3 text-dark-primary shadow-[0_0_1rem_rgba(0,0,0,0.1)] transition-colors duration-200 hover:bg-[#7d5126] active:bg-[#6f4821]"
    >
      <Icon className="flex h-auto w-5" />
    </button>
  );
};

export default ControlButton;
