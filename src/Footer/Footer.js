import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div style={{ background: `#343434` }} className={styles.footer}>
      <p>A <a href='http://www.digitalhyperspace.com'>Digital Hyperspace</a> Production &copy; 2017</p>
    </div>
  );
}

export default Footer;
