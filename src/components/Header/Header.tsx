import { FC, ReactNode } from 'react';
import { TitleBanner, TitleHeader, TitleLink } from './Header.styled';

interface ChildType {
   children?: ReactNode
}

const Header: FC<ChildType> = ({ children }) => (
   <>
      <TitleBanner>
         <TitleLink href="/">
            <TitleHeader>johnhusseyaudio.dev</TitleHeader>
         </TitleLink>
      </TitleBanner>
      {children ?? children}
   </>
);

export default Header;
