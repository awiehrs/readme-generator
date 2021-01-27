// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<p align="center">
  <img src="assets/readme-header.png">
  </p>
  
  # ${data.title}
  
  ## **Description**
    
  ${data.description}
  
  ---
  
  ## Table of Contents  
  
  - [Description](#Description)  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Test Instructions](#Tests)
  - [Contributions](#Contributions)
  - [License](#License)
  - [Questions & Contact](#Questions)
  
  
  ---
  
  ## **Installation**
  
  ${data.installation}
  
  ---
  
  ## **Usage**
  
  ${data.usage}
  
  ---
  
  ## **Contributions**
  
  ${data.contributions}
  
  ---
  
  ## **Tests**
  
  ${data.tests}
  
  ---

  ## **License**

  ![GitHub](https://img.shields.io/badge/license-${data.license}-blue?style=plastic)
  

  ## Questions 
  
  ![GitHub Logo](/assets/github-icon.png)  
  [GitHub](https://www.github.com/${data.gitname})
    
  
  Send me an e-mail at: ${data.email}  
`;
}

module.exports = generateMarkdown;
