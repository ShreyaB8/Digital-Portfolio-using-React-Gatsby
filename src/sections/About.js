import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import "../styles/about.scss"

const Background = () => (
  <div>
    <Triangle
      //color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      //color=""
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      //color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

function shoot() {
  alert("Great Shot!");
}


const About = () => (
  <div className="aboutflex">
  <Section.Container id="about" Background={Background}  >
    <Section.Header name="About me" icon="‍" label="person"  />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={(data) => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap" style={{fontSize: '20px'}}>
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 1]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
              <button onClick={shoot}>Take the shot!</button>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
         
        );
      }}
    />
    
  </Section.Container>
  </div>
);

export default About;
