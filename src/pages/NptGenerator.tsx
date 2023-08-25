import { FunctionComponent } from "react";
import Header from "../components/Header/Header";
import { DetailsContent, AnimatedLink, DetailsContentImage, DetailsContentParagraph, BorderedBox } from "../Global.styled";
import AudioEmbed, { AudioEmbedProps } from "../components/AudioEmbed/AudioEmbed";
import PageWrapper from "../components/PageWrapper/PageWrapper";


export const NptGeneratorDetails: FunctionComponent = () => {

    const demos: AudioEmbedProps[] = [
        {
            title: "1. Pulses",
            src: "audio/pulses1.mp3",
        },
        {
            title: "2. Tones and pulses",
            src: "audio/tones.mp3",
        },
        {
            title: "3. Spatialised Pulses",
            src: "audio/pulses2.mp3",
        },
    ];
    return (
        <PageWrapper>
            <Header />
            <DetailsContent>
                <h2>NPT Generator</h2>
                <section>
                    <h3>Project Description</h3>
                    <DetailsContentParagraph>The noise, pulse, tone generator is a sound source that partially implements trainlet
                        synthesis as
                        described in <AnimatedLink href="https://mitpress.mit.edu/9780262681544/microsound/">Microsound by
                            Curtis
                            Roads</AnimatedLink>. It is deployed as a VST plugin to be used inside
                        host environments such as Ableton and Bitwig.
                    </DetailsContentParagraph>
                    <DetailsContentImage src="img/npt-generator.png" alt="Image description" />
                </section>
                <section>
                    <h3>Features and Functionality
                    </h3>
                    <DetailsContentParagraph>At its core the plugin is an impulse generator. The trainlet synthesiser focuses on pulse
                        density,
                        timbre and spatialization parameters. Incoming MIDI notes trigger an envelope which is
                        applied to
                        the amplitude of the trainlet output, initiating a pulse train at the pitch specified by the
                        pitch
                        parameter. Spatial position is primarily controlled by a pan parameter. Some degree of
                        randomisation
                        can be introduced with the stereo spread parameter, allowing for each pulse to have its own
                        position
                        in the stereo field. Pulse rate is controlled (amongst other things) by a macro parameter.
                        Timbral
                        variety is achieved with an additive synthesis approach coupled with a set of 3 window
                        functions,
                        which the user can smoothly morph between, with one parameter.

                    </DetailsContentParagraph>
                    <DetailsContentParagraph>In one deviation from the trainlet synthesis approach described in Microsound, the user is
                        offered 3
                        core app states, noise, pulse trains and whole tones, which are navigated with the macro
                        parameter.
                        The noise is created by dense, frequency modulated pulse trains and the whole tones are
                        created by
                        pulse
                        trains that have a zero or small duration between each pulse, so that the pulse train is
                        experienced
                        as a continuous tone. This is a shortcut to offering a larger sonic palette. Some expamples of the sounds available:
                    </DetailsContentParagraph>
                    <BorderedBox>
                        {demos.map(({ title, src }) => {
                            return (
                                <AudioEmbed src={src} title={title} key={title}></AudioEmbed>
                            )
                        })}
                    </BorderedBox>
                </section>
                <section>
                    <h3>Technical Overview

                    </h3>
                    <DetailsContentParagraph>The app is implemented in the JUCE framework allowing different systems to be easily
                        targeted. The UI
                        is
                        implemented using the JUCE draw routines and a set of custom classes that act as a design
                        system.

                    </DetailsContentParagraph>
                    <DetailsContentParagraph>DSP code is implemented in C++ in a separate custom package. Each DSP unit (for example
                        envelope, pan
                        function or oscillator) is broken down into its own class for maximum portability and
                        transparency.
                        This
                        approach was influenced by the <AnimatedLink
                            href="https://github.com/pichenettes/eurorack/blob/master/plaits/dsp/oscillator/sine_oscillator.h">Mutable
                            Instruments Plaits project</AnimatedLink>.
                    </DetailsContentParagraph>
                    <DetailsContentParagraph>
                        In terms of voicing, there are 4 trainlet voices that typically play back simultaneously but
                        pulse
                        duration can be randomly offset to create a denser and more chaotic timbres. Each voice is
                        implemented
                        as a digitally controlled oscillator that uses a pre-calculated wavetable to
                        generate a pulse with the appropriate harmonic content. Each pulse consists of a fundamental
                        with 14
                        additional harmonics. The relative influence of the harmonics is determined by a parameter
                        and a
                        window
                        function is applied to each pulse for additional timbral control. Linear interpolation
                        is used on the wavetable to minimise artefacts during playback.
                    </DetailsContentParagraph>
                </section>
            </DetailsContent>
        </PageWrapper>
    );
}
