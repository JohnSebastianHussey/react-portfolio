import { FunctionComponent } from "react";
import Header from "../components/Header/Header";
import { DetailsContent, AnimatedLink, DetailsContentImage, DetailsContentParagraph, BorderedBox } from "../Global.styled";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import AudioEmbed, { AudioEmbedProps } from "../components/AudioEmbed/AudioEmbed";

export const MicrosoundDelay: FunctionComponent = () => {
    const demos: AudioEmbedProps[] = [
        {
            title: "1. Pulses",
            src: "audio/stutter.mp3",
        },
        {
            title: "2. Particles",
            src: "audio/particles.mp3",
        },
        {
            title: "3. Crunch",
            src: "audio/crunch.mp3",
        }
    ];
    return (
        <PageWrapper>
            <Header />
            <DetailsContent>
                <h2>Microsound Delay VST</h2>
                <section>
                    <h3>Project Description</h3>
                    <DetailsContentParagraph>
                        The microsound delay is an experimental project to explore microsound in the context of a delay plugin.
                        The plugin is implemented as a stereo delay line with crossfading between changing delay times.
                        The delay line can be played back at variable speeds.
                        The main deviation from a typical delay line is an additional processing step, which breaks the wet signal up into
                        chunks based on the zero-crossings found in the waveform. The density and length of these chunks are parameterised.
                        The result is something between a stutter delay and a limited granular system, with sonic results between gentle pulsing
                        and coarse particles possible. Some audio examples are provided below, where an identical piano sample is processed in different ways:
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
                    <DetailsContentParagraph>
                        <h4>Changing delay times</h4>
                        To achieve smooth variation in the delay times, a crossfading approach is utilised. Samples are written into the delay buffer and read based on the location of the primary read index. Should the primary index be updated to a new value, a cross fade is initiated between the new read index and the old read index. Once the crossfade is completed, the primary read index is updated to the new value.
                        When reading from the buffer, hermite interpolation is used for further smoothing.
                    </DetailsContentParagraph>
                    <DetailsContentParagraph>
                        <h4>Microsound</h4>
                        The main deviation from a standard delay effect is the additional microsound processing on the wet signal. The signal is broken into chunks of a user-determined duration and these chunks are spaced in time according to a density parameter, which can also be influenced by a level of randomness. In some respects it is similar to granular synthesis except for the fact that instead of using a windowing function to generate the sound particles, the sound is sliced at the zero crossings, nearest to the location specified by the duration and density parameters. Additionally there is just one stream of particles, rather than many, like in a typical granular synthesis implementation.
                        This feature can amongst other things, give the delay a pulsing or coarse particulate character.
                    </DetailsContentParagraph>
                    <DetailsContentParagraph>
                        <h4>Changing delay read speeds</h4>
                        It is also possible to adjust the read speed of the delay, such that echoes can be pitched down or up. Given that the delay is implemented as a buffer, it is possible that the write index may overlap the read index (or visa versa), causing a sudden discontinuity in the waveform. To mitigate this, such overlaps are anticipated and a crossfade is initiated with a “safe” place in the buffer, where safe means that the location is not imminently to be overwritten by the write index.
                    </DetailsContentParagraph>
                </section>
            </DetailsContent>
        </PageWrapper>
    );
}
