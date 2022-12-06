// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") return "";
  if (license) {const licenseBadge = `![License badge](https://img.shields.io/badge/License-${license}-green)`;
  return licenseBadge;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") return "";
  if (license) {
    return `- [License](#license)
    `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === "No License") return "";
if (license) {
  return `
## License

This project uses a ${license} license.
`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${renderLicenseLink(data.license)}
## Installation

${data.installation_instructions}

## Usage

${data.usage_information}
${renderLicenseSection(data.license)}
## Contributing

${data.contribution_guidelines}

## Tests

${data.test_instructions}

## Questions

Github profile page: [${data.github_user}](https://github.com/${data.github_user})

If you have further questions feel free to send an email to: ${data.email_adress}

---`;
}
module.exports = generateMarkdown;
