const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'N A S A R',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muhammad Nasar',
  role: 'Python Developer',
  description:
    'Passionate Python developer specializing in creating efficient and scalable applications. Experienced in developing web applications, APIs, and automation scripts using Python. Proficient in various Python libraries and frameworks such as Django, Flask, and NumPy. Excited about leveraging Python to solve complex problems and deliver high-quality software solutions.',
  resume: 'https://pink-aleta-19.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/muhammadnasar56/',
    github: 'https://github.com/MuhammadNasarUddin',
  },
};


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AI Tools',
    description:
    "A website offering diverse AI tools and applications developed with Python, Flask, OpenAI, and other free Python libraries.",
        stack: ['Python', 'Flask', 'OpenAI'],
    sourceCode: 'https://github.com/MuhammadNasarUddin/nasar',
    livePreview: 'https://nasar.rehanlabs.com/',
  },
  {
    name: 'E-commerce',
    description:
    'A Python and Django-based e-commerce platform with Bootstrap for responsive design, featuring Google login and order confirmation emails for enhanced user experience.',
    stack: ['Python', 'Django', 'Bootstrap'],
    sourceCode: 'https://github.com/MuhammadNasarUddin/malefashion',
    livePreview: 'https://github.com/MuhammadNasarUddin/malefashion',
  },
  {
    name: 'E-library',
    description:
    "A Python and Django web app for e-libraries enabling browsing, user registration, book requests, and admin approval/rejection of requests.",
    stack: ['Python', 'Django', 'Bootstrap'],
    sourceCode: 'https://github.com/MuhammadNasarUddin/elibrary',
    livePreview: 'https://github.com/MuhammadNasarUddin/elibrary',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'Python',
  'React',
  'Django',
  'Flask',
  'Git',
  'Linux'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'muhammadnasar012@gmail.com',
}

export { header, about, projects, skills, contact }
