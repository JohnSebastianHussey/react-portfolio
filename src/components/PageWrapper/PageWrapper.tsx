import { FC, ReactNode } from 'react';
import { ContentWrapper, PageContainer } from './PageWrapper.styled';
import Footer from '../Footer/Footer';

interface PageWrapperProps {
   children?: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
   <PageContainer>
      <ContentWrapper>
         {children ?? children}
      </ContentWrapper>
      <Footer />
   </PageContainer>
);

export default PageWrapper;
