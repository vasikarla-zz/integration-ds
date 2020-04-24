import React from 'react';
import styles from './Link.css';

interface LinkProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const Link = (props: LinkProps) => {
  return <a className={styles.link} href="http://www.google.com">This is a Link component {props.value}</a>;
}

export default Link;
