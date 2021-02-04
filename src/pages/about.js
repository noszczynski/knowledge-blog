import React from 'react'

import Layout from '../Layout'
import { Content, GreatParagraph, Heading, LinkSection, Seo } from '../components'
import styled from 'styled-components'
import { ABOUT_CONTENT } from '../utils/constants'

const StyledContent = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
`

const Hr = styled.hr`
    width: 100%;
    display: flex;
    border: none;
`

const StyledSpaceSM = styled(Hr)`
    padding: 1rem 0;
`

const StyledSpaceMD = styled(Hr)`
    padding: 3rem 0;
`

const StyledSpaceXL = styled(Hr)`
    padding: 5rem 0;
`

const About = () => {
    return (
        <Layout>
            <Seo title={'O mnie'} />
            <LinkSection>
                <Heading variant={'h1'}>O mnie</Heading>
                <GreatParagraph>Parę zdań o tym co robię, czym się interesuję oraz jakie mam doświadczenie zawodowe.</GreatParagraph>
            </LinkSection>
            <Content>
                <StyledContent>
                    <StyledSpaceMD />
                    <h2>Cześć 👋</h2>
                    <StyledSpaceSM />
                    <strong>https://gitlab.com/users/noszczynski/projects</strong>
                    <br />
                    <strong>https://bitbucket.org/noszczynski</strong>
                    <br />
                    <strong>https://codepen.io/adamnoszczynski</strong>
                    <br />
                    <strong>https://codesandbox.io/dashboard/noszczynski</strong>
                    <StyledSpaceMD />
                    {ABOUT_CONTENT.map(({ title, items }) => {
                        return (
                            <>
                                <h2>{title}</h2>
                                {items &&
                                    items.map(({ title, stack, liveUrl, liveLabel, codeUrl, codeLabel }) => {
                                        return (
                                            <>
                                                <h3>{title}</h3>
                                                <br />
                                                <p>
                                                    <strong>stack:</strong>
                                                    {stack}
                                                    <br />
                                                    <strong>
                                                        {codeUrl ? (
                                                            <a href={codeUrl} rel="noreferrer noopener" target="_blank">
                                                                {codeLabel}
                                                            </a>
                                                        ) : (
                                                            codeLabel
                                                        )}
                                                    </strong>
                                                    <br />
                                                    <strong>
                                                        {liveUrl ? (
                                                            <a href={liveUrl} rel="noreferrer noopener" target="_blank">
                                                                {liveLabel}
                                                            </a>
                                                        ) : (
                                                            liveLabel
                                                        )}
                                                    </strong>
                                                    🔥
                                                    <br />
                                                </p>
                                            </>
                                        )
                                    })}
                                <StyledSpaceXL />
                            </>
                        )
                    })}
                    <h2>💪🏼 Etap MVP...</h2>
                    <h3>Kurs Angular</h3>
                    <p>
                        <strong>stack:</strong>
                        Angular
                        <br />
                        <strong>
                            <a href={'https://github.com/noszczynski/angular-course'} rel="noreferrer noopener" target="_blank">
                                code
                            </a>
                        </strong>
                        <br />
                        <strong>live</strong>
                        available soon 🔥
                        <br />
                    </p>
                    <h3>Blog</h3>
                    <p>
                        <strong>stack:</strong>
                        React + Gatsby + GraphQL + GraphCMS
                        <br />
                        <strong>
                            <a href={'https://github.com/noszczynski/blog'} rel="noreferrer noopener" target="_blank">
                                code
                            </a>
                        </strong>
                        <br />
                        <strong>
                            <a href={'https://confident-panini-c2961e.netlify.app/'} rel="noreferrer noopener" target="_blank">
                                live
                            </a>
                        </strong>
                        🔥
                        <br />
                    </p>
                    <StyledSpaceXL />
                    <h2>🏁 Ukończone projekty...</h2>
                    <h3>Animacja strony startowej</h3>
                    <p>
                        <strong>stack:</strong>
                        Javascript + HTML + CSS + GSAP
                        <br />
                        <strong>
                            <a href={'https://github.com/noszczynski/hero-animation'} rel="noreferrer noopener" target="_blank">
                                code
                            </a>
                        </strong>
                        <br />
                        <strong>
                            <a href={'https://condescending-pare-70787b.netlify.com/'} rel="noreferrer noopener" target="_blank">
                                live
                            </a>
                        </strong>
                        🔥
                        <br />
                    </p>
                    <h3>Projekt z kursu 'React w praktyce' autora Adama Romańskiego (Eduweb)</h3>
                    <p>
                        <strong>stack:</strong>
                        React
                        <br />
                        <strong>
                            <a href={'https://github.com/noszczynski/react-in-practise'} rel="noreferrer noopener" target="_blank">
                                code
                            </a>
                        </strong>
                        <br />
                        <strong>
                            <a href={'https://react-course-app.netlify.app/'} rel="noreferrer noopener" target="_blank">
                                live
                            </a>
                        </strong>
                        🔥
                        <br />
                    </p>
                    <h3>Projekt z kursu 'React - techniki zaawansowane' autora Adama Romańskiego (Eduweb)</h3>
                    <p>
                        <strong>stack:</strong>
                        React
                        <br />
                        <strong>
                            <a href={'https://github.com/noszczynski/react-advanced'} rel="noreferrer noopener" target="_blank">
                                code
                            </a>
                        </strong>
                        <br />
                        <strong>
                            <a href={'https://blissful-wright-5526f0.netlify.app/'} rel="noreferrer noopener" target="_blank">
                                live
                            </a>
                        </strong>
                        🔥
                        <br />
                    </p>
                    <StyledSpaceXL />
                    <h2>🌱 Obecnie uczę się...</h2>
                    <p>
                        <strong>React</strong>
                        <br />
                        <strong>Typescript</strong>
                        <br />
                        <strong>Angular</strong>
                        <br />
                        <strong>Gatsby</strong>
                        <br />
                        <strong>GraphQL</strong>
                        <br />
                        <strong>GraphCMS</strong>
                        <br />
                        <strong>DatoCMS</strong>
                        <br />
                        <strong>Angular</strong>
                        <br />
                        <strong>Figma</strong>
                        <br />
                    </p>
                    <h2>📫 Jak się ze mną skontaktować</h2>
                    <p>
                        <strong>Messenger:</strong>
                        <br />
                        <a href={'https://www.messenger.com/t/adam.noszczynski'} rel="noreferrer noopener" target="_blank">
                            https://www.messenger.com/t/adam.noszczynski
                        </a>
                        <StyledSpaceSM />
                        <strong>E-mail:</strong>
                        <br />
                        <a href={'mailto:adam.noszczynski@gmail.com'} rel="noreferrer noopener" target="_blank">
                            adam.noszczynski@gmail.com
                        </a>
                        <br />
                    </p>
                </StyledContent>
            </Content>
        </Layout>
    )
}

export default About
