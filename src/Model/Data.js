

import HTML from '../assets/html-logo.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import React from '../assets/react-logo.png';
import Tailwind from '../assets/tailwind-logo.png';
import MaterialUi from '../assets/materialui-logo.png';
import Java from '../assets/java-logo.png';
import NodeJs from '../assets/node-logo.png';
import Mysql from '../assets/mysql-logo.png';
import Dart from '../assets/dart-logo.png';
import Git from '../assets/git-logo.png';
import Github from '../assets/github-logo.png';
import Vercel from '../assets/vercel-logo.png';
import VsCode from '../assets/vscode-logo.png';
import Figma from '../assets/figma-logo.png';
import Mobi from '../assets/mobi-preview.png'
import Recweb from '../assets/recweb-preview.png'

const Data = {
    language: [
        {
            id: 1,
            image: HTML,
            name: 'HTML5'
        },
        {
            id: 2,
            image: CSS,
            name: 'CSS3'
        },
        {
            id: 3,
            image: Javascript,
            name: 'Javascript'
        },
        {
            id: 4,
            image: React,
            name: 'React'
        },
        {
            id: 5,
            image: Tailwind,
            name: 'Tailwind'
        },
        {
            id: 6,
            image: MaterialUi,
            name: 'Materialui'
        },
        {
            id: 7,
            image: Java,
            name: 'Java'
        },
        {
            id: 8,
            image: NodeJs,
            name: 'NodeJs'
        },
        {
            id: 9,
            image: Mysql,
            name: 'Mysql'
        },
        {
            id: 10,
            image: Dart,
            name: 'Dart'
        }
    ],

    other: [
        {
            id: 11,
            image: Git,
            name: 'Git'
        },
        {
            id: 12,
            image: Github,
            name: 'Github'
        },
        {
            id: 13,
            image: Vercel,
            name: 'Vercel'
        },
        {
            id: 14,
            image: VsCode,
            name: 'VsCode'
        },
        {
            id: 15,
            image: Figma,
            name: 'Figma'
        }
    ],

    project: [
        {
            id: 16,
            image: Mobi,
            name: 'Mobi',
            skills: [
                {
                    image: VsCode,
                    name: 'VsCode'
                },
                {
                    image: React,
                    name: 'Reactjs'
                },
                {
                    image: Tailwind,
                    name: 'Tailwind'
                },
                {
                    image: CSS,
                    name: 'Css'
                },
                {
                    image: Github,
                    name: 'Github'
                }
            ],
            description: 'Develop and maintain the Mobi website using React.js to deliver a responsive and efficient user interface, featuring visually appealing layouts with Tailwind and CSS styling, showcasing trending movies and TV shows, integrating a video player for trailers with smooth playback, and implementing a search functionality for finding specific titles.',
            Visit: 'https://mobi-gules.vercel.app/',
            Github: 'https://github.com/RheillyAguilar/mobi'
        },
        {
            id: 17,
            image: Recweb,
            name: 'Recweb',
            skills: [
                {
                    image: VsCode,
                    name: 'VsCode'
                },
                {
                    image: HTML,
                    name: 'HTML'
                },
                {
                    image: Tailwind,
                    name: 'Tailwind'
                },
                {
                    image: CSS,
                    name: 'Css'
                },
                {
                    image: Github,
                    name: 'Github'
                },
                {
                    image: Javascript,
                    name: 'Javascript'
                }
            ],
            description: 'Develop and maintain the frontend of Recweb using HTML, CSS, and JavaScript, ensuring a responsive layout for an optimal viewing experience across desktop, tablet, and mobile devices, and applying CSS styling to create an aesthetically pleasing interface with meticulous attention to typography, color schemes, and layout.',
            Visit: 'https://rheillyaguilar.github.io/Recweb/',
            Github: 'https://github.com/RheillyAguilar/Recweb'
        },
        
    ],
}


export default Data;