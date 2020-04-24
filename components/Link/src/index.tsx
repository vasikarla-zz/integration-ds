import React from 'react';
import styles from './Link.css';

interface LinkProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const Link = (props: LinkProps) => {
  return <div className={styles.link}>This is a Link component {props.value}</div>;
}

export default Link;
