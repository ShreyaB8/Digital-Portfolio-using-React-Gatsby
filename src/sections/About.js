import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import {navigate} from 'gatsby';
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
              <Box paddingTop={[30]} paddingLeft={20}  >
                  <Fade left>
                    <a href={`https://drive.google.com/file/d/1ANUhW1wUwTAEUnhSOjnap8o7PlhZ2B8v/view?usp=sharing`}  className="button" ><span>Download Resume</span></a>
                  </Fade>
              </Box>
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
