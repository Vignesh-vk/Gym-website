import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa' }}>
      <p>© {new Date().getFullYear()} Elite-edge. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
