const chromeIcon = document.getElementById('chrome-browser-container-icon');
const chromeBrowser = document.getElementById('chrome-browser');
const closeTab = document.getElementById('close-tab');

const minimizeBrowser = document.getElementById('toggle-minimize-browser');
const fullscreenBrowser = document.getElementById('toggle-fullscreen-browser');
const closeBrowser = document.getElementById('toggle-close-browser');

chromeIcon.addEventListener('click', () => {
  chromeBrowser.classList.toggle('active');
  chromeIcon.classList.add('active');
});

closeTab.addEventListener('click', () => {
  chromeBrowser.classList.remove('active');
  chromeIcon.classList.remove('active');
});

minimizeBrowser.addEventListener('click', () => {
  chromeBrowser.classList.toggle('active');
});

fullscreenBrowser.addEventListener('click', () => {
  chromeBrowser.classList.toggle('fullscreen');
  fullscreenBrowser.classList.toggle('fa-square');
  fullscreenBrowser.classList.toggle('fa-expand');
});

closeBrowser.addEventListener('click', () => {
  chromeBrowser.classList.remove('active');
  chromeIcon.classList.remove('active');
});

function renderItems(items, elementId) {
  document.getElementById(elementId).innerHTML = items;
}

const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'Scss',
  'Typescript (Familiar)',
  'PHP (Familiar)',
  'MySQL'
];

renderItems(skills, 'skills');

const frameworks = [
  'React',
  'Redux',
  'Node.js',
  'Express',
  'Bootstrap 3',
  'Responsive Web Design',
  'jQuery',
  'Mobile first Development',
  'nodeJs with Express (Familiar)'
];

renderItems(frameworks, 'frameworks');

const tools = [
  'Git',
  'vsCode',
  'Gulp',
  'Google Maps API v2',
  'Translate Figma (mock ups) to HTML/CSS(SCSS/SASS)/JavaScript',
  'Linux terminal',
  'Figma',
  'Sketch',
  'Adobe Photoshop CS6'
];

renderItems(tools, 'tools');

const myWorkExperience = {
  data: [
    {
      company: 'Code.Hub',
      url: 'https://codehub.com',
      title: 'React Software Engineer',
      duration: 'April 2022 – July 2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.'
    },
    {
      company: 'Code.Hub-Interamerican',
      url: 'https://www.interamerican.gr/en',
      title: 'React Software Engineer',
      duration: 'January 2024 - July 2025 (7 months)',
      description: `During my work at Interamerican I contributed to the development and enhancement of two ReactJS
applications, as well as an additional application built within the IBM WebSphere Portal CMS. I translated
design mockups from Figma into responsive and functional front-end code, ensuring alignment with design
specifications and user experience best practices.`
    },
    {
      company: 'Code.Hub-Eurobank',
      url: 'https://www.eurobank.gr/en/',
      title: 'React Software Engineer',
      duration: 'April 2022 – Dec 2023 (1 year 9 months)',
      description: `Worked as part of the team in Eurobank web banking under Agile scrum methodology. I gained extensive
experience as a ReactJS developer. The front end stack was ReactJS, Redux and redux-saga middleware.
Performed unit testing for every feature I developed using mocha and chai. Worked closely with the team
members to create consistent, reusable and maintainable code.`
    },
    {
      company: 'Intralot',
      url: 'https://www.intralot.com/',
      title: ' Front End Web Developer',
      duration: 'November 2019 – April 2022 (2 years 6 months)',
      description: `Worked as part of the team in Eurobank web banking under Agile scrum methodology. I gained extensive
experience as a ReactJS developer. The front end stack was ReactJS, Redux and redux-saga middleware.
Performed unit testing for every feature I developed using mocha and chai. Worked closely with the team
members to create consistent, reusable and maintainable code.`
    },
    {
      company: ' DEUS EX MACHINA',
      url: 'https://ekmechanes.com/',
      title: 'Front End Web Developer',
      duration: 'June 2017 – October 2019 (2 years 5 months)',
      description: `Designed and developed - in collaboration with the Lead Web Developer the Deus Ex Machina website and
translated several other mock ups to front end code.
• Exposed to Angular, Typescript and NodeJS by working on various other projects.`
    },
    {
      company: ' growcreate.',
      url: 'https://growcreate.co.uk/',
      title: 'Front End Web Developer',
      duration: 'June 2016 – Nov. 2016 (6 months)',
      description: `Responsible for the translation of the designer’s work, (Photoshop or Sketch), to front-end code. Worked under Scrum Methodology. Front End Development using SCSS.
During my work at GrowCreate I worked in the following projects:
Developed 2 promotional landing pages for beerbods.
Contributed in connor project.
Worked on the London & Capital project.
Delivered a project for KBL European Private Bankers
Developed an iPad application (the front end) for stokers using Ionic Framework and AngularJs in cooperation
with the Lead Front End Developer. `
    },
    {
      company: '  WEB Creative UK Ltd.',
      url: 'https://clubview.co.uk/',
      title: 'Junior Front End Web Developer',
      duration: 'Oct. 2014 – Jan. 2015 (4 months)',
      description: `Responsible for the translation of the designer’s Photoshop creations to front-end code.
• Familiarized myself with company’s internal software framework and integrated the final result of each project
into it.
• Designed and developed a pixel perfect front end result by gaining exposure in Photoshop tools.
• Wrote maintainable, responsive, cross-browser code in HTML/CSS and jQuery following W3C Standards.
• Examples of my work include kibworthgolfclub.co.uk and leasowegolfclub.co.uk. `
    }
  ]
};

const myEducation = {
  data: [
    {
      duration: 'Sep. 2012 – Sep. 2013',
      title: 'MSc in Software Engineering',
      company: 'University of York',
      url: 'https://www.york.ac.uk/',
      description: `Dissertation Topic: ‘Simulation of cell division and differentiation - A DSL for reactive/transitional systems
modeling`
    },
    {
      duration: 'Feb. 2005 – Sep. 2011',
      title: `Undergraduate degree in Electronic
Computing Systems Engineering (Hons)`,
      company: 'Higher Technological Educational Institute of Piraeus',
      url: 'https://www.york.ac.uk/',
      description: `Thesis: ‘Design and Development of an Interactive Business Guide using Google Maps API (Implemented with
        PHP, JavaScript, MySQL, Google Maps API).
        Build an interactive web application where end users were able to search and register companies’ information
        (e.g. Business Name, Address, Phone and Email) to Google maps.`
    }
  ]
};

function renderWorkExperience(items, elementId) {
  const html = items.data
    .map(
      (item) => `
      <div class="item">
        <h3 class="heading-3">${item.duration} ${item.title} at <a href="${item.url}" target="_blank">${item.company}</a></h3>
        <ul class="item-description"><li>${item.description}</li></ul>
      </div>
    `
    )
    .join('');

  document.getElementById(elementId).innerHTML = html;
}

renderWorkExperience(myWorkExperience, 'work-expierence');
renderWorkExperience(myEducation, 'education');
