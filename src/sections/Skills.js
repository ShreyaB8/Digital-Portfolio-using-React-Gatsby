import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import "../styles/skills.scss"

const Background = () => (
  <div>
    <Triangle
      //color="background"
      height={['80vh', '80vh']} //topright
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      //color="#background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      //color="background"
      height={['25vh', '40vh']} //bottomright
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      //color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
        <Triangle
      //color="background"
      height={['10vh', '10vh']}
      width={['50vw', '50vw']}
    />
    <Triangle
      //color="background"
      height={['10vh', '10vh']}
      width={['50vw', '50vw']}
      invertX
    />

  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primaryLight} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({
  name,
  description,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="secondary">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ProjectTag >
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5} >
              <SocialLink
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle bg="primaryLight" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="primaryLight">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Projects = () => (
  <div className="aboutflex">
  <Section.Container id="skills" Background={Background}>
  <Section.Header name="Skills" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulAbout {
            projects {
              name
              description
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Project {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
  </div>
);

export default Projects;
