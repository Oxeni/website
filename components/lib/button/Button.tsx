import { CSSProperties, FC, ReactNode } from "react";
import { colorStyles, sizeStyles, defaultStyles } from "./Button.style";

interface buttonInterface {
  color?: "yellow" | "black" | "blue" | "white";
  size?: "large" | "medium" | "small";
  width?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children?: any;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const Button: FC<buttonInterface> = ({
  children,
  color,
  size,
  width,
  onClick,
  className,
  id,
  style,
  icon,
  iconRight,
}) => {
  return (
    <>
      <div
        className={`button ${className}`}
        style={style}
        onClick={onClick}
        id={id}>


        <div className="btn_container">
          {icon && <div className="base-icon_style icon">{icon && icon}</div>}

          {children}

          {iconRight && (
            <div className="base-icon_style iconRight">{iconRight}</div>
          )}


        </div>









        <style jsx>{`
          .button {
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            position: relative;
            cursor: pointer;
            transition: box-shadow 0.15s ease;
            user-select: none;
            width: ${width && width};
            padding: ${size ? sizeStyles[size].padding : defaultStyles.padding};
            background: ${color ? colorStyles[color].bg : defaultStyles.bg};
            border: ${color ? colorStyles[color].border : defaultStyles.border};
          }

          .btn_container {
            display: flex;
            align-items: center;
          }

          .base-icon_style {
            transform: translateY(4px);
          }

          .icon {
            margin-right: calc(1rem + .5vw);
          }

          .iconRight {
            margin-left: calc(1rem + .5vw);
          }
        `}</style>
      </div>
    </>
  );
};

export default Button;
