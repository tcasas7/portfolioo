import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const OtherProjectsSection = styled.section`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.glass.background}10;

    @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
    margin-top: 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(246, 177, 122, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.light};
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  opacity: 0.9;
  margin-top: -0.25rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
`;

const Links = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.accent};
    font-size: 1.3rem;

    &:hover {
      color: ${theme.colors.light};
    }
  }
`;

const otherProjects = [
  {
    title: 'Landing Page - Legal Services Firm',
    description: 'Responsive landing page built with provided UI/UX design, focusing on accessibility and branding.',
    techStack: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/tcasas7/rsa-abogados',
    liveUrl: 'https://estudiorsa.com.ar/'
  },
  {
    title: 'Notes-Ensolvers (Technical Challenge)',
    description: 'Full-stack notes app with auth, filtering, tagging, and automated setup using NestJS & Angular.',
    techStack: ['NestJS', 'Angular', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/tcasas7/notes'
  },
  {
    title: 'POS System for Restaurant (Academic Project)',
    description: 'Java-based POS with PostgreSQL for handling orders, payments, and product management.',
    techStack: ['Java', 'NetBeans', 'PostgreSQL'],
    github: 'https://github.com/tcasas7/java_pos'
  }
];

const OtherProjects = () => (
  <OtherProjectsSection id="other-projects">
    <SectionTitle>Other Projects</SectionTitle>
    <Grid>
      {otherProjects.map((proj, i) => (
        <Card key={i}>
          <Title>{proj.title}</Title>
          <Description>{proj.description}</Description>
          <TechList>
            {proj.techStack.map((tech, idx) => (
              <Tech key={idx}>{tech}</Tech>
            ))}
          </TechList>
          <Links>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
            >
              <FaGithub />
            </a>
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </Links>
        </Card>
      ))}
    </Grid>
  </OtherProjectsSection>
);

export default OtherProjects;
