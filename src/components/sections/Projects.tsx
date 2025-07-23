import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrls: string[];
  liveUrl?: string;
  moreContent?: {
    video?: string;
    pdf?: string;
  };
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #111;
  border-radius: 12px;
  padding: 1.5rem;
  padding-bottom: 3rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;

    @media (max-width: ${theme.breakpoints.sm}) {
    right: auto;
    left: 1rem;
  }
  `;

const ProjectsSection = styled.section`
  padding-top: calc(${theme.spacing.xl} + 0.5rem);
  padding-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

    @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
    margin-top: -2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;
  padding-top: calc(${theme.spacing.xl} + 3rem);

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  padding-top: calc(${theme.spacing.xl} + 2rem);
  padding: ${theme.spacing.lg} 0;
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
  margin-bottom: 1.5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: 1.75rem;
  }
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
  margin-top: auto;
  gap: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: 1rem;

    &:hover {
      color: ${theme.colors.light};
    }
  }
`;

const Button = styled(motion.button)`
  background: ${theme.colors.accent};
  color: #000;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease;
`;


const Role = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.accent};
  font-weight: 500;
  margin-bottom: 0.2rem;
  display: block;
`;


const SocialLink = styled(motion.a)`
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



const projects: Project[] = [
  {
    title: "Logistics management system",
    description: "Logistics system with admin panel and secure APIs.",
    techStack: [".NET", "Angular", "Ionic", "Bootstrap", "SQL Server", "JWT", "EF Core"],
    githubUrls: [
      "https://github.com/tcasas7/viandas-Front-",
      "https://github.com/tcasas7/viandas-Back"
    ],
    moreContent: {
      video: "https://drive.google.com/file/d/1cv7BdcI2qwsoDUUcS3_xsLaJo-5zIr5R/view?usp=sharing",
      pdf: "/pdf/VDS-English.pdf"
    }
  },
  {
    title: "Fan Token Web App",
    description: "Prototype app for fan rewards with admin/user flows.",
    techStack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS"],
    githubUrls: [
      "https://github.com/tcasas7/NYD-front",
      "https://github.com/tcasas7/NYD-tokens"
    ],
    moreContent: {
      video: "https://res.cloudinary.com/dl2aaz0wy/video/upload/v1750972144/wshapkdjplnbfsx6tgre.mp4",
      pdf: "/pdf/Fan-Token-Web-App-Full-Prototype.pdf"
    }
  },
  {
    title: "Property Booking Platform",
    description: "Booking site for rental properties with role handling.",
    techStack: ["Next.js", "Nest.js", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS"],
    githubUrls: [
      "https://github.com/tcasas7/properties-proyect"
    ],
    liveUrl: "https://www.altos-alojamientos.com/",
    moreContent: {
      video: "https://res.cloudinary.com/dl2aaz0wy/video/upload/v1750978148/v7nqkgncphvbbeanvdfv.mp4",
      pdf: "/pdf/Vacation-Rental-Platform.pdf"
    }
  }
];

const FeaturedProjects = () => {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Featured Projects</SectionTitle>
        <Grid>
          {projects.map((proj, i) => (
            <Card key={i}>
              <Role>Full Stack Developer (Freelance)</Role>
              <Title>{proj.title}</Title>
              <Description>{proj.description}</Description>
              <TechList>
                {proj.techStack.map((tech, i) => (
                  <Tech key={i}>{tech}</Tech>
                ))}
              </TechList>
              <Links>
              {proj.githubUrls.map((url, idx) => (
                <SocialLink
                  key={idx}
                  href={url}  
                  target="_blank"
                  rel="noopener noreferrer"
                  title={idx === 0 ? 'Frontend' : 'Backend'}
                  whileHover={{ y: -5 }}
                  role="listitem"
                  aria-label={`Visit ${idx === 0 ? 'Frontend' : 'Backend'} repository`}
                >
                  <FaGithub style={{ fontSize: '1.5rem' }} />
                </SocialLink>
              ))}
                {proj.liveUrl && (
                  <SocialLink
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    whileHover={{ y: -5 }}
                    aria-label="Visit live site"
                  >
                    <FaExternalLinkAlt style={{ fontSize: '1.5rem' }} />
                  </SocialLink>
                )}
              </Links>
              {proj.moreContent && (
                <Button
                  onClick={() => setModalProject(proj)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More details
                </Button>

              )}
            </Card>
          ))}
        </Grid>
      </div>

      <AnimatePresence>
        {modalProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
             
              {modalProject.moreContent?.pdf && (
                <>
                  <iframe
                    src={modalProject.moreContent.pdf}
                    title="PDF Presentation"
                    width="100%"
                    height="400px"
                    style={{ borderRadius: '8px' }}
                  />
                  <a
                    href={modalProject.moreContent.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      color: theme.colors.accent,
                      textDecoration: 'underline',
                      marginTop: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                     View in full screen
                  </a>
                </>
              )}
              {modalProject.title === "Logistics management system" ? (
                <>
                  <a
                    href={modalProject.moreContent?.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      color: theme.colors.accent,
                      textDecoration: 'underline',
                      marginTop: '2rem',
                      marginBottom: '2rem',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}
                  >
                    View desktop version on Google Drive
                  </a>

                  <h4
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      color: theme.colors.accent,
                      marginTop: '2rem',
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}
                  >
                    Mobile version
                  </h4>
                  <video
                    controls
                    width="100%"
                    style={{ borderRadius: '8px', marginBottom: '1rem' }}
                  >
                    <source
                      src="https://res.cloudinary.com/dl2aaz0wy/video/upload/v1750972922/wgktr7gidgta7gr3nscb.mp4"
                      type="video/mp4"
                    />
                  </video>
                </>
              ) : modalProject.moreContent?.video && (
                <video
                  controls
                  width="100%"
                  style={{ borderRadius: '8px', marginBottom: '1rem' }}
                >
                  <source src={modalProject.moreContent.video} type="video/mp4" />
                </video>
              )}
            </ModalContent>
             <CloseButton onClick={() => setModalProject(null)}>×</CloseButton>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default FeaturedProjects;
