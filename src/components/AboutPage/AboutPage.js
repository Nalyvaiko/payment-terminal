import React from 'react';

const AboutPage = () => {
  return (
    <div style={{margin: "2rem"}}>
      <h2 className="header">About</h2>
      <h3>Payment terminal prototype</h3>
      <p>Used technologies:</p>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Router</li>
        <li>Jest</li>
      </ul>
      <p>Created by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Nalyvaiko">Vitalii Nalyvaiko</a></p>
    </div>
  );
};

export default AboutPage;
