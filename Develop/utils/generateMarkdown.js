// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  - [Questions & Contact](#Questions)
  
  
  ---
  
  ## **Installation**
  
  ${data.installation}
  
  ---
  
  ## **Usage**
  
  ${data.usage}
  
  ---
  
  ## **Contributions**
  
  ${data.contibutions}
  
  ---
  
  ## **Tests**
  
  ${data.tests}
  
  ---
  
  ## Questions 
  
  ![GitHub Logo](/assets/github-icon.png)  
  [link](https://www.github.com/${data.gitname}  
    
  
  Send me an e-mail at: ${data.email}  
`;
}

module.exports = generateMarkdown;
