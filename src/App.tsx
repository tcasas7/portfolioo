import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';
import OtherProjects from './components/sections/OtherProyects';



const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Education = lazy(() => import('./components/sections/Education'));

const LoadingFallback = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  
  @media print {
    display: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 
      <Layout> 
        <Hero />
        <Suspense fallback={<LoadingFallback>Loading skills...</LoadingFallback>}>
          <Skills />
        <Suspense fallback={<LoadingFallback>Loading proyects...</LoadingFallback>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading education...</LoadingFallback>}>
         <Education />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading other projects...</LoadingFallback>}>
         <OtherProjects />
        </Suspense>
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
