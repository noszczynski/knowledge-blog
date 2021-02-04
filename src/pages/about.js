import React from 'react'

import Layout from '../Layout'
import { Content, GreatParagraph, Heading, LinkSection, Seo } from '../components'
import styled from 'styled-components'
import { ABOUT_CONTENT } from '../utils/constants'

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
                <StyledSpaceMD />
                <h2>Cześć 👋</h2>
                <p>
                    Nazywam się Adam Noszczyński. Jestem React developerem z wykształceniem informatycznym. Stworzyłem tę stronę aby
                    składować na niej swoje projekty oraz przydane roziązania w kodzie a także zebrać wszystkie informacje kontaktowe w
                    jednym miejscu.
                </p>
                <p>
                    Interesuję się programowaniem oraz ogólną informatyką. Niedawno zajawiłem się tematyką finansów oraz inwestycji. W
                    wolnym czasie realizuje swoje projekty, których całą masę mam na mojej liście do zrobienia, a także uczę się nowych
                    rzeczy.
                </p>
                <p>
                    Poniżej znajduje się lista rzeczy które wyszły z fazy planowania i przekształciły się w coś konkretnego. Nie wszystko
                    jest w takiej formie, w jakiej chciałbym żeby docelowo było, ale myślę że warto pokazać chociaż część z tego.
                </p>
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
                    <strong>
                        <a href={'https://github.com/noszczynski'} rel="noreferrer noopener" target="_blank">
                            Github
                        </a>
                    </strong>
                    <br />
                    <strong>
                        <a href={'https://gitlab.com/users/noszczynski/projects'} rel="noreferrer noopener" target="_blank">
                            Gitlab
                        </a>
                    </strong>
                    <br />
                    <strong>
                        <a href={'https://bitbucket.org/noszczynski'} rel="noreferrer noopener" target="_blank">
                            Bitbucket
                        </a>
                    </strong>
                    <br />
                    <strong>
                        <a href={'https://codepen.io/adamnoszczynski'} rel="noreferrer noopener" target="_blank">
                            Codepen
                        </a>
                    </strong>
                    <br />
                    <strong>
                        <a href={'https://codesandbox.io/dashboard/noszczynski'} rel="noreferrer noopener" target="_blank">
                            Code Sandbox
                        </a>
                    </strong>
                    <StyledSpaceSM />
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
            </Content>
        </Layout>
    )
}

export default About
