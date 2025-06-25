import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MobileToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1050;
  background: #f6b17a;
  color: #000;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1040;
`;

const Drawer = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background: #1a1a1a;
  backdrop-filter: blur(10px);
  z-index: 1051;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #f6b17a;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  color: #fff;
  border: none;
`;

export const MobileDashboardNav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Featured Projects' },
    { id: 'education', name: 'Education' },
    { id: 'other-projects', name: 'Other Projects' },
    { id: 'contact', name: 'Contact' }
  ];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


  return (
    <>
      <MobileToggle onClick={() => setOpen(true)}>Menu</MobileToggle>
      <AnimatePresence>
        {open && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <Drawer
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <CloseButton onClick={() => setOpen(false)}>×</CloseButton>
              {links.map(({ id, name }) => (
                <Link
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                    setOpen(false);
                }}
                >
                {name}
                </Link>
              ))}
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
