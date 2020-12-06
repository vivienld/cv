const data = {
    name: 'Vivien Le Duc',
    pic: 'profile.jpeg',
    subtitle: 'Titre professionnel niveau III',
    title: 'Développeur web et web mobile',
    stage: 'Cherche stage du 04/01/21 au 29/01/21',
    infos: [
        {
            label: 'phone',
            icon: 'fas fa-phone',
            text: '06 73 58 95 81',
            link: null
        }, {
            label: 'mail',
            icon: 'far fa-envelope',
            text: 'leducvivien@gmail.com',
            link: 'mailto:leducvivien@gmail.com'
        }, {
            label: 'discord',
            icon: 'fab fa-discord',
            text: 'Vivien Le Duc#1008',
            link: 'https://discord.com/users/Vivien%20Le%20Duc#1008'
        },
        {
            label: 'linkedin',
            icon: 'fab fa-linkedin',
            text: 'vivienleduc',
            link: 'https://www.linkedin.com/in/vivienleduc/'
        },
        {
            label: 'github',
            icon: 'fab fa-github',
            text: 'vivienld',
            link: 'https://github.com/vivienld'
        },
        {
            label: 'npm',
            icon: 'fab fa-npm',
            text: 'vouvounshka',
            link: 'https://www.npmjs.com/~vouvounshka'
        },
        {
            label: 'address',
            icon: 'fas fa-map-marker-alt',
            text: 'Nantes',
            link: null
        },
        {
            label: 'birthdate',
            icon: 'fas fa-birthday-cake',
            text: '04.11.1987',
            link: null
        },

    ],
    description: `Autodidacte dans le code depuis
        2005, je saute enfin le pas de la
        formation afin de transformer un
        passe-temps en passion.
        
        Ce stage sera pour moi l'occasion de confirmer mon choix
        et mes compétences de développeur.`,
    last_experience:
    {
        title: 'maître d\'hotel',
        company: 'Brasserie l\'Octopus',
        location: 'Nantes',
        start: '2019',
        end: '2020',
        tasks: [
            'Relation commerciale et clientèle',
            'Coordination des équipes en salle',
            'Organisation d\'évènements musicaux, repas d\'entreprise, fêtes',
            'Assistance à la direction'
        ]
    },
    diplomas: [
        {
            title: 'Développeur Web et Web Mobile Java',
            school: 'Simplon.co Nantes',
            location: 'Nantes (44)',
            year: 'En cours',
        },
        {
            title: 'Bac littéraire',
            school: 'Lycée Saint Gzbriel',
            location: 'Pont L\'Abbée (29)',
            year: '2005',
        },
        {
            title: 'Campbridge English B2 (FCE)',
            school: 'Lycée Saint Gzbriel',
            location: 'Pont L\'Abbée (29)',
            year: '2004',
        }
    ],
    skills: [
        {
            title: 'web',
            levels: [
                {
                    title: 'html_css',
                    value: 4
                },
                {
                    title: 'js',
                    value: 4
                },
                {
                    title: 'react',
                    value: 4
                },
                {
                    title: 'php',
                    value: 2
                },
                {
                    title: 'design',
                    value: 2
                },
                {
                    title: 'spring',
                    value: 2
                }
            ]
        },
        {
            title: 'languages',
            levels: [
                {
                    title: 'java',
                    value: 3
                },
                {
                    title: 'uml',
                    value: 3
                },
                {
                    title: 'nodejs',
                    value: 3
                },
                {
                    title: 'python',
                    value: 2
                }
            ]
        },
        {
            title: 'systèmes',
            levels: [
                {
                    title: 'git',
                    value: 4
                },
                {
                    title: 'linux',
                    value: 3
                }
            ]
        },
        {
            title: 'bases de données',
            levels: [
                {
                    title: 'sql',
                    value: 4
                },
                {
                    title: 'mysql',
                    value: 4
                },
                {
                    title: 'noSql',
                    value: 2
                },
                {
                    title: 'mongoDB',
                    value: 2
                }
            ]
        },
        {
            title: 'méthodes',
            levels: [
                {
                    title: 'agile',
                    value: 3
                },
                {
                    title: 'TDD',
                    value: 3
                },
                {
                    title: 'noSql',
                    value: 2
                },
                {
                    title: 'mongoDB',
                    value: 2
                }
            ]
        }
    ],
    languages: {
        french: 'langue maternelle',
        english: 'courant',
        spanish: 'scolaire'
    },
    strengths: [
        'Ambitieux',
        'Curieux',
        'Ponctuel',
        'Gestion d\'équipe',
        'prise de décision',
        'Travail en équipe',
        'Adaptable',
        'Analytique',
        'Persistant',
        'Ingénieux',
        'À l\'aise à l\'oral'
    ],
    hobbies: [
        'bricolage',
        'développement',
        'musique',
        'nouvelles technologies',
        'jeux-vidéo',
        'voyages'

    ],
    titles: {
        last_working_exp: "Dernière expérience professionnelle",
        scholarship: "Scolarité"
    }
};

export default data;