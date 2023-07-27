import { FunctionComponent } from "react";
import Header from "../components/Header/Header";
import { DetailsContent, AnimatedLink, DetailsContentImage, DetailsContentParagraph } from "../Global.styled";
import PageWrapper from "../components/PageWrapper/PageWrapper";

export const ForeverBeatsDetails: FunctionComponent = () => {
    return (
        <PageWrapper>
            <Header />
            <DetailsContent>
                <h2>Forever Beats</h2>
                <section>
                    <h3>Project Description</h3>
                    <DetailsContentParagraph>Forever Beats was a commercially available groove box for iOS. It featured an FM powered
                        sound engine
                        that could produce percussive and melodic sounds in six distinctive mono voices. The sounds
                        were
                        controlled with an in-built sequencer. It was also capable of sequencing external hardware.
                        It is
                        best understood as an Elektron Model:Cycles for iPad with a touch screen and additional beat
                        shuffling options.
                    </DetailsContentParagraph>
                    <DetailsContentParagraph>
                        The app was well received by users at the time and had a 4.5 rating on the App Store.

                    </DetailsContentParagraph>
                    <DetailsContentImage src="img/app2up.png" alt="Picture of the app running on an iPad" />
                </section>
                <section>
                    <h3>Technical Overview

                    </h3>
                    <DetailsContentParagraph>The project was largely implemented in the Swift programming language. The sound engine was
                        implemented in pure data using the pd-for-ios library, which communicated with the rest of
                        the
                        program through an Objective-C bridge.
                    </DetailsContentParagraph>
                    <DetailsContentParagraph>
                        The sound engine featured 6 synthesised voices, 4 of which were synthesised
                        percussive
                        sounds. The other two voices were designed by <AnimatedLink
                            href="https://mfl.floatingspectrum.com/portfolio/">Mei-Fang Liau</AnimatedLink> and were capable of
                        a broad
                        range of
                        textural and melodic sounds. The sequencer featured a custom beat shuffling option, allowing
                        the
                        user to algorithmically generate beat variations during live performance.
                    </DetailsContentParagraph>
                </section>
            </DetailsContent>
        </PageWrapper>
    );
}
