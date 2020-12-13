const data = {
    name: 'Vivien Le Duc',
    pic: 'profile.jpeg',
    subtitle: 'Titre professionnel niveau III',
    title: 'Développeur web et web mobile',
    stage: 'Cherche stage du 04/01/21 au 29/01/21',
    infos: [
        {
            label: 'address',
            icon: 'fas fa-map-marker-alt',
            text: 'Nantes',
            link: null
        },
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
            label: 'birthdate',
            icon: 'fas fa-birthday-cake',
            text: '04.11.1987',
            link: null
        },
        {
            label: 'car',
            icon: 'fas fa-car',
            text: 'Permis B',
            link: null
        },

    ],
    description: `Après une carrière accomplie dans le commerce et la restauration,
        cette réorientation est le résultat de 15 ans de passion en autodidacte dans le code. 
        Ce stage sera pour moi l'occasion de confirmer mon choix et mettre à profit mes compétences de développeur.`,
    lastExperience: [
        {
            description: 'maître d\'hotel',
            institution: 'Brasserie l\'Octopus',
            location: 'Nantes (44)',
            year: '2019/2020',
            tasks: [
                'Directeur suppléant',
                'Relation commerciale et clientèle',
                'Coordination des équipes en salle'
            ]
        }, {
            description: 'Manager',
            institution: 'Macarons et chocolats',
            location: 'Brest (29)',
            year: '2012/2014',
            tasks: [
                'Gestion de deux patisseries / salons de thé'
            ]
        },
        {
            description: 'Manager adjoint',
            institution: 'E.Leclerc',
            location: 'Quimper (29)',
            year: '2007/2009',
            tasks: [
                'Suivi des stocks et des chiffres de vente',
                'Mise en place des opérations commerciales'
            ]
        },

    ],
    diplomas: [
        {
            description: 'Développeur Web et Web Mobile Java',
            institution: 'Simplon.co Nantes',
            location: 'Nantes (44)',
            year: 'En cours',
        },
        {
            description: 'Certification OPQUAST',
            institution: 'Simplon.co Nantes',
            location: 'Nantes (44)',
            year: 'En cours',
        },
        {
            description: 'Bac littéraire',
            institution: 'Lycée Saint Gabriel',
            location: 'Pont L\'Abbée (29)',
            year: '2005',
        },
        {
            description: 'Campbridge English B2 (FCE)',
            institution: 'Lycée Saint Gabriel',
            location: 'Pont L\'Abbée (29)',
            year: '2004',
        }
    ],
    skills: [
        {
            title: 'frontend',
            levels: [
                {
                    title: 'HTML5 CSS3',
                    value: 4
                },
                {
                    title: 'JS, typescript',
                    value: 4
                },
                {
                    title: 'react',
                    value: 4
                },
            ]
        },
        {
            title: 'Backend',
            levels: [
                {
                    title: 'JAVA / SPRING BOOT',
                    value: 3
                },
                {
                    title: 'PHP 7 / Symfony',
                    value: 3
                },
                {
                    title: 'sql / mysql',
                    value: 3
                }
            ]
        },

        {
            title: 'méthodologies',
            levels: [
                {
                    title: 'méthodes agiles',
                    value: 3
                },
                {
                    title: 'prog. objet',
                    value: 5
                },

                {
                    title: 'prog. fonctionnelle',
                    value: 5
                },
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
        lastExperience: "Expériences marquantes",
        scholarship: "Scolarité",
        skills: "Compétences",
    }
};

export default data;