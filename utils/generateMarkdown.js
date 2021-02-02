// Generates the markdown file with styling
function generateMarkdown(data) {
  return `<p align="center">
  <img src="assets/readme-header.png">
  </p>
  
  # ${data.title}
  ![GitHub](https://img.shields.io/badge/license-${data.license}-blue?style=plastic)
  
  ---

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
  
  ## **Tests**
  
  ${data.tests}
  
  ---

  ## **Contributions**
  
  ${data.contributions}
  
  ---

  ## **License**

  ![GitHub](https://img.shields.io/badge/license-${data.license}-blue?style=plastic) 

  This application is covered under the licensing rules from ${data.license}
  

  ## Questions 
  
  ![GitHub Logo](/assets/github-icon.png)  
  [GitHub](https://www.github.com/${data.gitname})
    
  
  Send me an e-mail at: ${data.email}  
`;
}

module.exports = generateMarkdown;
