import * as React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../ThemeContext";
import ControlButton from "../../ControlButton";

const ChangeTheme: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <ControlButton
      icon={!isDarkMode ? IoSunnyOutline : IoMoonOutline}
      onClick={toggleTheme}
      title="Change theme"
    />
  );
};

export default ChangeTheme;
