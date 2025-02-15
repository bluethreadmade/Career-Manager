# Career Management Tool

## Introduction
This is a project to build a career management tool for individuals and organizations. The tool is intended to help individuals keep track of all their career accomplishments, tailor their resume to specific job postings, and keep them ready to apply at any moment. We intend to prevent that 'oh crap now I need to put my resume back together' moment for everyone. Below are some of our high level user stories:
- As a worker I find taking charge of my career to be challening. I want to keep my resume up to date so that when I see opportunities I can go for them, but it's challening to keep track of all my accomplishments and the metrics that make great bullet points. Actively searching for a job is also hard becuase I want to tailor my resume to each post. I also want to keep track of my applications and their outcomes.

- As an HR lead at a big company I've been hearing from my people leaders that it's hard to know who on their teams wants to do what next, and who is qualified for what. I also hear from all the employees that they want to know more about their potential paths and how to build a great resume. We offer perks like linkedin learning and careeer trainings.

- As an HR lead (and any people leader) I want to make the goal setting and review processes easier for leads and ICs. The organizations goals are trickled down to teams and then to individuals - but it's a lot of work to enter them all and everyone ends up doing a lot of copy/paste. The interface through ADP is seriously lacking and doesn't let us customize and roll up like we would like. The teams also get frustrated when the goals change, or aren't checked in on in a useful cadence, but the system is such a pain that no one wants to use it, and it's really hard to manage changing goals without the employee feeling like they failed"

## Roadmap
The first item on our roadmap is the resume builder. There are several out there, and people can just use google docs, MS office etc - but none of them really make it simple. With standard word processors you end up with 42 copies named Userresume-2014.doc or other annoying oflder structures for tailoring your resume to different job postings. The primary inspiration for the resume builder (Tailor) is tealhq.com's resume builder. It works nicely, but there is room for improvement. Their fee structure is unacceptable though. They are asking users to pay more for less than a word processor by making simple formatting a premium feature. Tailor's fee structure provides the standard word processing features at no cost and is fee based after a number of copies of a users resume are stored.

The next item on the roadmap is the goal management feature. This is currently undefined.

## Stack and Tools
### Frontend
- React - UI Framework
- Tailwind CSS - CSS Framework
- Print Styles (CSS @media print) - styling resumes to export as pdf

### Backend
- Node.js - runtime environment for running backend code (executes JavaScript on the backend)
- Express.js - framework for route handling and database interactions
- PostgreSQL - database for users and resume data
- pg (node-postgres) - PostgreSQL client for database queries

### Authentication
- Supabase

### Testing
- Jest

### Tools
- Figma - design
- Vite - development server
- ESLint - code quality
- Prettier - code formatter


