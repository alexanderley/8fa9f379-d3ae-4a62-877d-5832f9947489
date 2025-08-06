import React from "react";
import styles from "./RoundButton.module.scss";

type RoundButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  variant?: "add" | "delete";
  ariaLabel?: string;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  onClick,
  icon,
  variant = "add",
  ariaLabel,
}) => {
  return (
    <button
      className={`${styles.roundButton} ${styles[`${variant}Button`]}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default RoundButton;
