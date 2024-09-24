
const workExperience = ((new Date() - new Date('2021-03')) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)

const portfolioData = {
    "name": "Mohammed Shahul",
    "title": "Full Stack Developer",
    "contact": {
        "email": "mshahulpm@gmail.com",
        "location": "Calicut, Kerala",
        "linkedin": "https://www.linkedin.com/in/mshhaulpm/",
        "github": "http://github.com/mshahulpm",
        "leetcode": "https://leetcode.com/u/Mohammed-Shahul-P-M/",
        "hackerrank": "https://www.hackerrank.com/profile/mshahulpm",
        "blog": "https://hashnode.com/@shahulpm"
    },
    "about": `I'm a passionate full stack developer with over ${workExperience} years of work experience in creating robust and scalable web applications. My expertise spans both frontend and backend technologies, allowing me to deliver comprehensive solutions. I have a strong background in various programming languages and frameworks, and I'm always eager to learn and apply new technologies.`,
    "skills": [
        "JavaScript",
        "Typescript",
        "React",
        "Node.js",
        "Golang",
        "Express",
        "Nestjs",
        "Fastify",
        "Fiber",
        "Gin",
        "NextJs",
        "Remix",
        "MongoDB",
        "MySQL",
        "PostgreSql",
        "MsSql",
        "Prisma",
        "Mongoose",
        "HTML5",
        "CSS3",
        "Git",
        "Nginx",
        "Docker",
        "Linux server",
        "PM2",
        "Minio",
        "AWS",
        "Swagger",
        "Postman",
        "Rabbitmq",
        "Nats",
        "REST API", "GraphQL",
        "Jest",
    ],
    "projects": [
        {
            "title": "Mock Exam Platform",
            "description": "Built a full-featured Mock exam platform for MCQ Exams",
            "technologies": ["React", "Remix", "Node.js", "NestJs", "Postgres", "Typescript"],
            "link": "https://exam-portal-ui.vercel.app/"
        },
        {
            "title": "Prisma paginate plugin npm package",
            "description": "A simple pagination plugin for prisma orm ",
            "technologies": ["Nodejs", "Typescript"],
            "link": "https://www.npmjs.com/package/prisma-paginate-plugin"
        },
        {
            "title": "Json to excel cli",
            "description": "A cli tool to convert json to excel and vise-versa useful for multi-language web development",
            "technologies": ["Nodejs", "Chalk", "ora", "figlet", "exceljs", "inquirer", "commander"],
            "link": "https://www.npmjs.com/package/j2e"
        },
        {
            "title": "Delivery management Application",
            "description": "This is a freelance project for a UAE based delivery company.order management,staff management,customer management,barcode scanning integration,etc...",
            "technologies": ["Nextjs", "MUI", "Nestjs", "Postgressql", "PrismaORM"]
        },
    ],

    "experience": [
        {
            "title": "Software Engineer",
            "company": "Floges Software Solution",
            "duration": "2021 - Present",
            "description": "Worked on various projects including social media platforms, identity management systems, access management system, and e-commerce solutions."
        },
        {
            "title": "NodeJS Intern",
            "company": "Brototype",
            "duration": "Nov 2020 - Feb 2021",
            "description": "Developed a Grocery Delivery Management system for admin, customers, and shop owners."
        }
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    // Update name and title
    document.querySelector('#home h1').textContent = portfolioData.name;
    document.querySelector('#home p').textContent = portfolioData.title;

    // Populate About section
    document.getElementById('about-content').textContent = portfolioData.about;

    // Populate Skills section
    const skillsList = document.getElementById('skills-list');
    portfolioData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Populate Projects section
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Populate Experience section
    const experienceSection = document.createElement('section');
    experienceSection.id = 'experience';
    experienceSection.innerHTML = '<h2>Work Experience</h2>';
    const experienceList = document.createElement('ul');
    portfolioData.experience.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${exp.title} at ${exp.company}</h3>
            <p>${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        experienceList.appendChild(li);
    });
    experienceSection.appendChild(experienceList);
    document.querySelector('main').insertBefore(experienceSection, document.getElementById('contact'));

    // // Populate Education section
    // const educationSection = document.createElement('section');
    // educationSection.id = 'education';
    // educationSection.innerHTML = '<h2>Education</h2>';
    // const educationList = document.createElement('ul');
    // portfolioData.education.forEach(edu => {
    //     const li = document.createElement('li');
    //     li.innerHTML = `
    //         <h3>${edu.degree}</h3>
    //         <p>${edu.institution}, ${edu.year}</p>
    //         ${edu.score ? `<p>Score: ${edu.score}</p>` : ''}
    //     `;
    //     educationList.appendChild(li);
    // });
    // educationSection.appendChild(educationList);
    // document.querySelector('main').insertBefore(educationSection, document.getElementById('contact'));

    // Update contact form
    const contactSection = document.getElementById('contact');
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Email: ${portfolioData.contact.email}</p>
        <p>Location: ${portfolioData.contact.location}</p>
        <p>
            <a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a> |
            <a href="${portfolioData.contact.github}" target="_blank">GitHub</a> |
            <a href="${portfolioData.contact.leetcode}" target="_blank">LeetCode</a> |
            <a href="${portfolioData.contact.hackerrank}" target="_blank">HackerRank</a> |
            <a href="${portfolioData.contact.blog}" target="_blank">Blog</a>
        </p>
    `;
    contactSection.insertBefore(contactInfo, document.getElementById('contact-form'));

    // // Handle form submission
    // document.getElementById('contact-form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', {
    //         name: document.getElementById('name').value,
    //         email: document.getElementById('email').value,
    //         message: document.getElementById('message').value
    //     });
    //     alert('Thank you for your message! I will get back to you soon.');
    //     e.target.reset();
    // });
});