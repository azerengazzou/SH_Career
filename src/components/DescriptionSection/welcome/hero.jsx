import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.module.css'; // Import your own CSS file for additional styling

export const Hero = () => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const [typedText, setTypedText] = useState('');

  const bind = useGesture({
    onMove: ({ xy }) => {
      const [cursorX, cursorY] = xy;
      const offsetX = (cursorX - window.innerWidth / 2) / 30;
      const offsetY = (cursorY - window.innerHeight / 2) / 30;

      set({ x: offsetX, y: offsetY });
    },
  });

  const textSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200, // Adjust the delay as needed
  });

  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, // Adjust the delay as needed
  });

  useEffect(() => {
    const targetText = "Hello, Welcome to Career Builder!";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(targetText.substring(0, index));
      index += 1;

      if (index > targetText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Container className="p-2 rounded-lg hero-container" role="banner">
      <animated.div {...bind()} style={{ x, y }} aria-label="Drag to explore">
        <Row className="animated-background flex items-center" role="region" aria-label="Hero Content">
          <Col md={6} className="text-container p-4">
            <animated.div style={textSpring}>
              <h1 className="font-bold mb-4" role="heading" aria-level="1">{typedText}</h1>
              <p className="text-left mb-4" role="paragraph">Empower your career journey with Career Builder, your go-to platform for crafting professional resumes with ease. Whether you're a student, a fresh graduate, or a job seeker, unleash your potential and stand out to employers with personalized CVs tailored to your unique skills and experiences.</p>
            </animated.div>
          </Col>
          <Col md={6} className="image-container p-4" aria-hidden="true" role="presentation">
            <animated.img
              src="https://www.visualcv.com/static/457076c393ee960dcd325ed0f79eb6e9/e3663/CV_Builder_2x.png"
              alt="CV Builder"
              className="w-100 h-auto"
              style={imageSpring}
            />
          </Col>
        </Row>
      </animated.div>
    </Container>
  );
};
