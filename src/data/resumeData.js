#!/bin/env node

const fs = require('fs');

const resume = {
  contact: {
    email: 'dksato@gmail.com',
    firstName: 'Daniel',
    github: 'pretzelface',
    lastName: 'Sato',
    linkedin: 'dksato',
    location: 'Austin, TX',
    phone: '(512) 417-0239',
  },
  pages: [
    {
      name: 'technologies',
      type: 'skill',
      list: [
        {
          name: 'strong',
          list: [
            'React',
            'RxJS',
            'DraftJS',
            'Backbone',
            'jQuery',
            'JavaScript',
            'HTML/CSS',
            'Linux',
          ],
        },
        {
          name: 'experienced',
          list: ['React Native', 'Redux', 'Node', 'Express', 'Ruby on Rails', 'PostgreSQL'],
        },
        {
          name: 'familiar',
          list: ['Angular', 'MongoDB', 'Meteor', 'Cordova'],
        },
      ],
    },
    {
      name: 'experience',
      list: [
        {
          name: 'Bloomfire',
          location: 'Austin, TX',
          roles: [
            {
              name: 'Front-End Engineer',
              dates: [2016, 'Present'],
              bullets: [
                'Built customer-facing features using React and RxJS.',
                'Developed a plugin-based rich text editor useing DraftJS.',
                'Adopted TDD for async data flow and state management in RxJS.',
                'Maintained and extended legacy Backbone codebase on top of Ruby on Rails.',
              ],
            },
          ],
        },
        {
          name: 'Macmillan Publishing',
          location: 'Austin, TX',
          roles: [
            {
              name: 'Senior Teaching and Learning Representative',
              dates: [2014, 2015],
              bullets: [
                'Achieved the highest Fall 2014 revenue on a 25-person inside sales team',
                'Mentored struggling reps toward award-winning success',
              ],
            },
            {
              name: 'Account Manager (Sapling Learning, pre-acquisition)',
              dates: [2010, 2014],
              bullets: [
                'Consistently achieved ambitious semester sales goals which targeted over 100% growth.',
              ],
            },
            {
              name: 'Contract Account Manager (Sapling Learning, pre-acquisition)',
              dates: [2009, 2010],
              bullets: [
                'Generated and qualified leads from trade shows, conferences, and cold-calls.',
              ],
            },
          ],
        },
        {
          name: 'Houghton Mifflin Harcourt',
          location: 'Austin, TX',
          roles: [
            {
              name: 'Associate Editor',
              dates: [2007, 2008],
              bullets: [
                'Developed instruction materials for high school chemistry and middle school physical science.',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      list: [
        {
          name: 'Minnow',
          description: 'Collaborative trip planning and expense-sharing app',
          role: 'Full-Stack Engineer',
          team: 'Team of 4',
          url: 'www.minnow.pw',
          bullets: [
            'Developed an image upload and storage component using React, MongoDB and GridFS.',
            'Used Meteor’s Cordova integration to create and debug native Android and iOS apps.',
            'Deployed a running web app to Heroku.',
          ],
        },
        {
          name: 'Eureka',
          description: 'Link-sharing app with voting, comments, and keyword tagging',
          role: 'Scrum Master & Back-End Engineer',
          team: 'Team of 4',
          bullets: [
            "Inherited another team's codebase with less than a week to build enhancements.",
            'Wrote comments and user/link deletion functionality in Node/Express and Mongoose.',
            'Developed unit tests for full back-end coverage using Mocha.',
          ],
        },
        {
          name: 'Pegasys',
          description: 'Carpooling app matching users by location, destination, and route',
          role: 'Scrum Master & Front-End Engineer',
          team: 'Team of 4',
          bullets: [
            'Developed user signup, discovery, and messaging using Angular.',
            'Built route analysis to match users using the Google Maps API.',
          ],
        },
        {
          name: 'Creepster',
          description: 'Photo-sharing and voting app with messaging capabilities',
          role: 'Full-Stack Engineer',
          team: 'Solo project',
          bullets: [
            'Built a photo-sharing, voting, and messaging app with a 36-hour deadline',
            'Integrated with Sky Biometry API to analyze uploaded photos by gender',
            'Implemented user accounts and messaging using Backbone and jQuery.',
            'Later rewrote the front-end using React and Redux.',
          ],
        },
      ],
    },
    {
      name: 'education',
      list: [
        {
          name: 'Hack Reactor',
          location: 'Austin, TX',
          date: 2016,
          description: 'Advanced software engineering immersive',
        },
        {
          name: 'The Evergreen State College',
          location: 'Olympia, WA',
          date: 2006,
          description:
						'BS & BA with a concentration in chemistry. Substantial coursework in biology.',
        },
      ],
    },
    {
      name: 'about',
      type: 'about',
      about: [
        'Daniel is a native of Austin, Texas, where he works as a front-end developer in the social media space.',
      ],
      image: null,
    },
  ],
};

fs.writeFile('../../public/resume.json', JSON.stringify(resume), () => {
  process.exit();
});
