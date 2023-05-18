const generateSVG = (shape) => {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>
      ${shape.render()}
      <text x="150" y="114" text-anchor="middle" font-size="45" fill="${shape.textColor}">${shape.logoName}</text>
  </g>    
  </svg>
  `;
};

module.exports = { generateSVG };

