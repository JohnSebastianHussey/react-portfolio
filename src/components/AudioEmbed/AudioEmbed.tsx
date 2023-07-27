import { FC } from 'react';
import { AudioLabel, StyledAudio } from './AudioEmbed.styled';

export interface AudioEmbedProps {
   src: string;
   title: string;
}

const AudioEmbed: FC<AudioEmbedProps> = ({ title, src }) => (
   <>
      <AudioLabel>{title}</AudioLabel>
      <StyledAudio controls>
         <source src={src} type="audio/mpeg" />
      </StyledAudio>

   </>
);

export default AudioEmbed;
