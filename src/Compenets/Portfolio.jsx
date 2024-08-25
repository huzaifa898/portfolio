import React from 'react';
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project4 from "../Assets/project3.png";
import project5 from "../Assets/project4.png";
import project6 from "../Assets/project5.png";
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "UI for frontend development using React.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project2,
        title: "Project #2",
        description: "A fullstack application built with Node.js",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project4,
        title: "Project #3",
        description: "An e-commerce platform with various features.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project5,
        title: "Project #4",
        description: "A mobile-friendly application using React Native.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project6,
        title: "Project #5",
        description: "A data visualization project using D3.js and other libraries.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project6,
        title: "Project #5",
        description: "A data visualization project using D3.js and other libraries.",
        links: {
            site: "#",
            github: "#",
        },
    },
];

const Portfolio = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 md:px-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8 text-center'>Portfolio</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div className='bg-gray-800 p-4 rounded-lg shadow-lg w-[450px] flex flex-col'>
                            <div className='mb-4'>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='w-full h-48 object-cover rounded-lg shadow-lg'
                                />
                            </div>
                            <div className='flex flex-col justify-between flex-grow'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-2'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex space-x-4 mt-auto'>
                                    <a href={project.links.site}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        View Site
                                    </a>
                                    <a href={project.links.github}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        <AiOutlineGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
