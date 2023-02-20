// function to generate markdown for README
function generateMarkdown(data) { return `
# ${data.title}
![GitHub License](https://img.shields.io/badge/License-${data.license}-blue.svg)
## Description 
${data.description}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)
- [Credits](#Credits)
- [Contributing](#Contributing)
- [License](#License)
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.tests}
## Questions
Contact me if you have any questions!
- Drop me an email [${data.email}](mailto:${data.email})
- Check out my GitHub profile [${data.githubUsername}](https://github.com/${data.githubUsername})
## Credits
${data.credits}
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
${data.contributing}
## License
This project is licensed under the terms of the **${data.license} License**. See [LICENSE](LICENSE) for more information.
`;}
  
module.exports = generateMarkdown;