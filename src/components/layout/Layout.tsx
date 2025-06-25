import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { FloatingNav } from '../navigation/FloatingNav';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { MobileDashboardNav } from '../MobileDashboardNav';


interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      #f6b17a15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), transparent);
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

const Logo = styled(motion.div)`
  color: #fff;
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #ccc;
    transition: all 0.3s ease;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #f6b17a;
  color: #000;
  padding: 1rem;
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  color: #ccc;
  padding: 2rem 0;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.05), transparent);
  }
`;

const FloatingWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();

useEffect(() => {
  const handleLinkClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (anchor) {
      const id = anchor.getAttribute('href')!.substring(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();

        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          let topOffset = 0;
          if (id === 'projects' || id === 'contact') {
            topOffset = -50;
          } else if (id === 'hero' || id === 'skills' || id === 'education') {
            topOffset = 80;
          }
          const y = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }

        else {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  document.addEventListener('click', handleLinkClick);
  return () => document.removeEventListener('click', handleLinkClick);
}, []);



  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              Portfolio
            </Logo>
            <NavLinks role="list">
              <a href="#skills" role="listitem" aria-label="Skills section">Skills</a>
              <a href="#projects" role="listitem" aria-label="Featured Projects section">Featured Projects</a>
              <a href="#education" role="listitem" aria-label="Education section">Education</a>
              <a href="#other-projects" role="listitem" aria-label="Other Projects section">Other Projects</a>
              <a href="#contact" role="listitem" aria-label="Contact section">Contact</a>
            </NavLinks>
          </div>
        </Nav>
      </Header>

      <MobileDashboardNav />

      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>

      <FloatingWrapper>
        <FloatingNav />
      </FloatingWrapper>

      <Footer role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Tomas Casas. All rights reserved.</p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
