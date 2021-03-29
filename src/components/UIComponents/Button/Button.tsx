import React, { ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onclick, disabled, children }) => (
  <button className={styles.buttonContainer} onClick={onclick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
