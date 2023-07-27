import React, { FC } from 'react';
import { AudioEmbedIFrame, AudioEmbedWrapper, AudioEmbedLink } from './AudioEmbed.styled';

interface AudioEmbedProps { }

const AudioEmbed: FC<AudioEmbedProps> = () => (
   <AudioEmbedWrapper>
      <AudioEmbedIFrame src="https://audio.com/embed/audio/1750782890924436?theme=light"></AudioEmbedIFrame>
      <AudioEmbedLink href='https://audio.com/william-woodcleft-wilderness-journeys'>@william-woodcleft-wilderness-journeys</AudioEmbedLink>
   </AudioEmbedWrapper>
);

export default AudioEmbed;
