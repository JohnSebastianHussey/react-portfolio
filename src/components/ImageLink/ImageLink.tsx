import { FC } from 'react';
import { Card, CardImage, CardImageContainer, CardLink, CardTitle, CardTitleContainer, Project } from './ImageLink.styled';
import { DefaultLink } from '../../Global.styled';

interface ImageLinkProps {
   title: string;
   img: string;
   link: string;
   altText: string;
}

const ImageLink: FC<ImageLinkProps> = ({ title, img, link, altText }) => (
   <Project>
      <Card href={link}>
         <CardImageContainer>
            <CardImage src={img} alt={altText}></CardImage>
         </CardImageContainer>
      </Card>
      <CardTitleContainer>
         <CardLink href={link}>
            <CardTitle>{title}</CardTitle>
         </CardLink>
      </CardTitleContainer>
   </Project>
);

export default ImageLink;
