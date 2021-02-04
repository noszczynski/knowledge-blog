const LANGUAGES = {
    PL: 'pl',
    EN: 'en',
}

const EXPERIENCE_LEVEL = {
    BEGINNER: 'BEGINNER',
    ENTRY_JUNIOR: 'ENTRY_JUNIOR',
    JUNIOR: 'JUNIOR',
    ENTRY_REGULAR: 'ENTRY_REGULAR',
    REGULAR: 'REGULAR',
    ENTRY_SENIOR: 'ENTRY_SENIOR',
    SENIOR: 'SENIOR',
}

const EXPERIENCE = [
    { label: 'React', level: EXPERIENCE_LEVEL.ENTRY_REGULAR },
    { label: 'HTML', level: EXPERIENCE_LEVEL.REGULAR },
    { label: 'HTML Semantic', level: EXPERIENCE_LEVEL.JUNIOR },
    { label: 'CSS', level: EXPERIENCE_LEVEL.ENTRY_SENIOR },
    { label: 'Angular', level: EXPERIENCE_LEVEL.BEGINNER },
    { label: 'Vue', level: EXPERIENCE_LEVEL.BEGINNER },
    { label: 'Figma', level: EXPERIENCE_LEVEL.ENTRY_JUNIOR },
    { label: 'English', level: EXPERIENCE_LEVEL.ENTRY_REGULAR },
]

const ABOUT_CONTENT = [
    {
        title: '🔭 Obecnie pracuję nad...',
        items: [
            {
                title: 'MyStartup app',
                stack: 'React + Syled-components + I18n + GSAP + Framer-motion',
                codeUrl: 'https://bitbucket.org/Innewit/mystartup-web-app-client/src/develop/',
                codeLabel: 'Repozytorium',
                liveUrl: 'https://bitbucket.org/Innewit/mystartup-web-app-client/src/develop/',
                liveLabel: 'Live',
            },
            {
                title: 'Angular material',
                stack: 'Angular + Material-design + tests',
                codeUrl: 'https://github.com/noszczynski/angular-material-app',
                codeLabel: 'Repozytorium',
                liveUrl: null,
                liveLabel: 'Live wkrótce',
            },
            {
                title: 'Kizaeuro.pl',
                stack: 'React + Styled-components + I18n',
                codeUrl: null,
                codeLabel: 'Repozytorium prywatne 😔',
                liveUrl: 'http://kizaeuro.pl/',
                liveLabel: 'Live',
            },
        ],
    },
    {
        title: '💪🏼 Etap MVP...',
        items: [
            {
                title: 'Kurs Angular',
                stack: 'Angular',
                codeUrl: 'https://github.com/noszczynski/angular-course',
                codeLabel: 'Repozytorium',
                liveUrl: null,
                liveLabel: 'Live wkrótce',
            },
            {
                title: 'Blog',
                stack: 'React + Gatsby + GraphQL + GraphCMS',
                codeUrl: 'https://github.com/noszczynski/blog',
                codeLabel: 'Repozytorium',
                liveUrl: 'https://confident-panini-c2961e.netlify.app/',
                liveLabel: 'Live',
            },
        ],
    },
    {
        title: '🏁 Ukończone projekty...',
        items: [
            {
                title: 'Animacja strony startowej',
                stack: 'Javascript + HTML + CSS + GSAP',
                codeUrl: 'https://github.com/noszczynski/hero-animation',
                codeLabel: 'Repozytorium',
                liveUrl: 'https://condescending-pare-70787b.netlify.com/',
                liveLabel: 'Live',
            },
            {
                title: "Projekt z kursu 'React w praktyce' autora Adama Romańskiego (Eduweb)",
                stack: 'React',
                codeUrl: 'https://github.com/noszczynski/react-in-practise',
                codeLabel: 'Repozytorium',
                liveUrl: 'https://react-course-app.netlify.app/',
                liveLabel: 'Live',
            },
            {
                title: "Projekt z kursu 'React - techniki zaawansowane' autora Adama Romańskiego (Eduweb)",
                stack: 'React',
                codeUrl: 'https://github.com/noszczynski/react-advanced',
                codeLabel: 'Repozytorium',
                liveUrl: 'https://blissful-wright-5526f0.netlify.app//',
                liveLabel: 'Live',
            },
        ],
    },
]

export { LANGUAGES, EXPERIENCE, EXPERIENCE_LEVEL, ABOUT_CONTENT }
