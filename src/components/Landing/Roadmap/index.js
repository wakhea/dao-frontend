import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Container from '../common/components/UI/Container';
import RoadmapWrapper from './roadmap.style';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Text from '../common/components/Text';

const Roadmap = ({
  row,
}) => {
  return (
    <RoadmapWrapper id="roadmap">
      <Container className="timeline-container">
        <Box className="row" {...row}>
          <Text content="2022 ROADMAP" className="title" />
          <VerticalTimeline lineColor="#5b82f8">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#5b82f8' }}
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              date="2011 - present"
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title current">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle current">Miami, FL</h4>
              <p className="current">
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              date="2010 - 2011"
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
            //icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
              iconStyle={{ background: '#5b82f8', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #5b82f8' }}
            //icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
              <p>
                Creative Direction, Visual Design
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>
      </Container>
    </RoadmapWrapper>
  );
};

// Roadmap style props
Roadmap.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// Roadmap default style
Roadmap.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
    display: 'flex',
    width: '100%',
    color: "red"
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#13296C',
    mb: '0px'
  },
  // section title default style
  sectionTitle: {
    as: 'span',
    letterSpacing: '16px',
    textAlign: 'center',
    fontSize: ['26px', '36px'],
    fontWeight: '300',
    color: '#13296C',
    mb: '0',
    lineHeight: '1.5',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#13296C',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(19, 41, 108, 0.502)',
  },
};

export default Roadmap;
