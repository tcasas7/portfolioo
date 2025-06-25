import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useState } from 'react';

const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -6rem;

   @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
    margin-top: -3rem;
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


const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${theme.spacing.md};
  border-left: 2px solid ${theme.colors.accent};
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding: ${theme.spacing.lg} 0;
  padding-left: ${theme.spacing.md};
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.accent};
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: ${theme.colors.light};
`;

const Institution = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: ${theme.colors.textLight};
`;

const Description = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  margin-top: 0.5rem;
`;


const Education = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const educations = [
    {
      date: '03/22 – 05/25',
      title: 'Technical Degree in Software Development',
      institution: 'Instituto Superior IDRA',
      description:
        'Focus on web development, OOP, REST APIs, software architecture, databases, and agile methodologies.',
    },
    {
      date: '03/25 – 05/25',
      title: 'AI and Machine Learning Program',
      institution: 'Anyone AI',
      description: 'Completed hands-on projects using AI models, FastAPI, and Docker.',
    },
    {
      date: '03/22 – 02/24',
      title: 'Training in Fraud and Compliance',
      institution: 'Aurum41',
      description:
        'Fraud prevention, regulatory compliance, and financial risk analysis.',
    },
  ];

  return (
    <EducationSection id="education" role="region" aria-label="Education Timeline">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionTitle>
      <Container>
        <Timeline>
          {educations.map((edu, i) => (
            <TimelineItem
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Date>{edu.date}</Date>
              <Title>{edu.title}</Title>
              <Institution>{edu.institution}</Institution>
              <Description>{edu.description}</Description>
               {edu.title === 'Technical Degree in Software Development' && (
              <motion.button
                onClick={() => setShowTranscript(true)}
                style={{
                  marginTop: '0.5rem',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: theme.colors.accent,
                  color: '#000',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Transcript & Certificate
              </motion.button>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
       {showTranscript && (
        <div
          onClick={() => setShowTranscript(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#111',
              padding: '1rem',
              borderRadius: '12px',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >

            <iframe
              src="/pdf/Materias_aprobadas_ CASAS, Tomas.pdf"
              title="Transcript"
              width="100%"
              height="600px"
              style={{ borderRadius: '8px' }}
            />

            <a
              href="/pdf/Materias_aprobadas_ CASAS, Tomas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                color: theme.colors.accent,
                textDecoration: 'underline',
                marginTop: '1rem',
              }}
            >
              View in full screen
            </a>
          </div>
            <button
              onClick={() => setShowTranscript(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                fontSize: '1.5rem',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
        </div>
        
      )}
      
    </EducationSection>
  );
};

export default Education;
