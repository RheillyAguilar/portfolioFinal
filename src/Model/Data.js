

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
            description: 'Developed and maintained the Mobi website using React.js, focusing n a responsive and efficient user interface. Implemented engaging features to display trending movies and TV shows, using Tailwind and CSS for a polished, visually appealing layout with attention to typography and color schemes. Integrated a video player for seamless trailer playback and created a search functionality to allow users to easily find specific titles.',
            Visit: 'https://mobi-gules.vercel.app/',
            Github: 'https://github.com/RheillyAguilar/mobi'
        }
    ],
}


export default Data;