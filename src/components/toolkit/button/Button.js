// @flow
import React, { type Node } from 'react';

type Props = {
  children: Node,
  onClick?: () => void,
  type?: string,
};

export const Button = ({ children, onClick, type }: Props) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};
