import React from 'react';
import './index.less';

interface ButtonProps {
  type?: string;
  children?: string;
  size?: string;
  onClick?: any;
  className?: string;
  disabled?: boolean;
  round?: boolean;
}

export default (props: ButtonProps) => {
  const { type, children, size, onClick, className, disabled, round} = props;
  const disableClass = disabled ? 'disabled': '';
  const roundClass = round ? 'round': '';
  return (
    <div
      className={`base ${type} ${size} ${className} ${disableClass} ${roundClass}`}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};
