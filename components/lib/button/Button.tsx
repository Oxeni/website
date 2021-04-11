import { CSSProperties, FC } from "react";
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
}) => {
  return (
    <>
      <div
        className={`button ${className}`}
        style={style}
        onClick={onClick}
        id={id}>
            
        {children}





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

          .button:hover {
            background: rgb(241, 241, 241);
          }
        `}</style>
      </div>
    </>
  );
};

export default Button;
