import { FunctionComponent } from "react";
import Header from "../components/Header/Header";
import { Container, CardGrid, AnimatedLink } from "../Global.styled";
import ImageLink from "../components/ImageLink/ImageLink";
import { TitleSubtext } from "../components/Header/Header.styled";
import PageWrapper from "../components/PageWrapper/PageWrapper";


interface Project {
    title: string;
    img: string;
    link: string;
    altText: string;
}

export const Home: FunctionComponent = () => {
    const projects: Project[] = [
        {
            title: "NPT-Generator: Pulse Train VST",
            img: "img/npt-generator.png",
            link: "#/npt-generator",
            altText: "Pulse Generator VST"
        },
        {
            title: "Microsound Delay VST",
            img: "img/microsound-delay.png",
            link: "#/microsound-delay",
            altText: "microsound delay"
        },
        {
            title: "Foreverbeats: iOS groovebox",
            img: "img/fb.png",
            link: "#/foreverbeats",
            altText: "iOS Groove box"
        }
    ];

    return (
        <PageWrapper>
            <>
                <Header>
                    <TitleSubtext>
                        <p>
                            I am an aspiring music technologist with a background in computer vision and web development. My
                            current
                            focus is:
                            Microsound, DSP, JUCE Framework, C++.
                        </p>
                        <p>
                            My general purpose resume can be found <AnimatedLink
                                href="https://docs.google.com/document/d/10xOWOsuCba4RbvAM8srFlmfimha-28U4VnYxgE3ppAE/edit?usp=sharing">here</AnimatedLink>.
                        </p>
                        <p>
                            Example music tech projects can be found below 👇
                        </p>
                    </TitleSubtext>
                </Header>
                <Container>
                    <CardGrid>
                        <>
                            {projects.map((project) => {
                                const { title, img, altText, link } = project;
                                return (
                                    <ImageLink title={title} img={img} link={link} key={title} altText={altText}></ImageLink>
                                )
                            })}
                        </>
                    </CardGrid>
                </Container>
            </>
        </PageWrapper>
    );
}
