// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'Unlicense'){
    return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="110" height="20" role="img" aria-label="license: Unlicense"><title>license: Unlicense</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="110" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="47" height="20" fill="#555"/><rect x="47" width="63" height="20" fill="#007ec6"/><rect width="110" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="245" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="370">license</text><text x="245" y="140" transform="scale(.1)" fill="#fff" textLength="370">license</text><text aria-hidden="true" x="775" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="530">Unlicense</text><text x="775" y="140" transform="scale(.1)" fill="#fff" textLength="530">Unlicense</text></g></svg>`;
  } else { 
    if (license == 'Apache'){
      return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="124" height="20" role="img" aria-label="License: Apache 2.0"><title>License: Apache 2.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="124" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="73" height="20" fill="#007ec6"/><rect width="124" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="865" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="630">Apache 2.0</text><text x="865" y="140" transform="scale(.1)" fill="#fff" textLength="630">Apache 2.0</text></g></svg>`;
    } else if (license == 'GNU GPL v3'){
      return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="20" role="img" aria-label="License: GPLv3"><title>License: GPLv3</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="96" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="45" height="20" fill="#007ec6"/><rect width="96" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="725" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">GPLv3</text><text x="725" y="140" transform="scale(.1)" fill="#fff" textLength="350">GPLv3</text></g></svg>`;
    } else if (license == 'MIT'){
      return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="20" role="img" aria-label="License: MIT"><title>License: MIT</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="82" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="31" height="20" fill="#dfb317"/><rect width="82" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="655" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="210">MIT</text><text x="655" y="140" transform="scale(.1)" fill="#fff" textLength="210">MIT</text></g></svg>
      `;
    } else if (license == 'ISC'){
      return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="20" role="img" aria-label="License: ISC"><title>License: ISC</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="80" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="29" height="20" fill="#007ec6"/><rect width="80" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="645" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="190">ISC</text><text x="645" y="140" transform="scale(.1)" fill="#fff" textLength="190">ISC</text></g></svg>`;
    } else if (license == 'Mozilla'){
      return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104" height="20" role="img" aria-label="License: MPL 2.0"><title>License: MPL 2.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="104" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="53" height="20" fill="#4c1"/><rect width="104" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="765" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">MPL 2.0</text><text x="765" y="140" transform="scale(.1)" fill="#fff" textLength="430">MPL 2.0</text></g></svg>`;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Unlicense'){
    return '';
  } else {
    if (license == 'Apache'){
      return`You can find more information on the license at https://choosealicense.com/licenses/apache-2.0/`;
    } else if (license ==='GNU GPL v3'){
      return`You can find more information on the license at https://choosealicense.com/licenses/gpl-3.0/`;
    } else if (license == 'MIT'){
      return`You can find more information on the license at https://choosealicense.com/licenses/mit/`;
    } else if (license == 'ISC'){
      return`You can find more information on the license at https://choosealicense.com/licenses/isc/`;
    } else if (license == 'Mozilla'){
      return`You can find more information on the license at https://choosealicense.com/licenses/mpl-2.0/`;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicense'){
    return '';
  } else {
    return`## License
    The license this application is covered under is ${license}
    ${renderLicenseLink(license)}`
  }
}

function renderLicenseTOC(license) {
  if (license === 'Unlicense'){
    return '';
  } else {
    return`- [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}     ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseTOC(data.license)}
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}

  ## Credits
  ${data.contributionGuidelines}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ---
  ## Questions
  https://github.com/${data.githubUsername}

  ${data.email}
`;
}

module.exports = generateMarkdown;
