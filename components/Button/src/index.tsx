import React from 'react';
import styles from './Button.css';

interface ButtonProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const Button = (props: ButtonProps) => {
  return <button type="button" className={styles.button}>This is a Button component {props.value}</button>;
}

export default Button;
