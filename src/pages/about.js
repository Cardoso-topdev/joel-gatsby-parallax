import React from "react";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from "../components/layout";
import BgImage from 'gatsby-background-image';

const AboutWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 45% 0;

  @media only screen and (min-width: 770px) {
    width: 65%;
    height: 100vh;
    padding: 0;
  }
`

const AboutHeader = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.3rem;

  & > h2 {
    margin-right: 5%;
  }
`

const MyStyledImage = styled(BgImage)`
  width: 180px;
  height: 180px;
  margin: 2%;
  float: right;

  &:before {
    border-radius: 50%;
  }

  @media only screen and (min-width: 770px) {
    width: 220px;
    height: 220px;
  }
`

const About = ({ data }) => (
  <Layout pageTitle="About Me">
    <AboutWrap>
      <div>
        <AboutHeader>
          <h2>Hello!</h2>
          <span>My name is Oscar</span>
        </AboutHeader>
        <MyStyledImage id="my-photo" fluid={data.file.childImageSharp.fluid} />
        <p>As I am a proactive and enthusiastic full stack developer with 4 years of professional experience, I have been providing clients with websites and applications with a modern design that is running fast and secure.</p>
        <p>I focus on simplifying the user experience and interface and delivering a clean and modern design aesthetic that highlights your objectives.</p>
        <p>I excel in converting Figma/XD designs into a seamlessly animated landing page using React.js. Besides, I am very familiar with SSR/SSG frameworks such as Next.js/Gatsby that make the React.js project SEO-friendly.</p>
        <p>I am also good at CMS frameworks such as WordPress and Shopify. Integrating headless cms is not also a difficult problem for me.</p>
        <p>I deliver the clean and DRY code which will optimize your project.</p>
        <p>I always bring a comprehensive approach to developing projects. I take the time to listen to your goals and needs and then tailor my approach to what is best for your business.</p>
        <p>I am ready to contribute to your great idea.</p>
        <p>This is my <a href="https://github.com/Cardoso-topdev" target="_blank" rel="noopener noreferrer">github</a>. I am ready to contribute to your great idea.</p>
        <p>I would love to hear from you! Please contact me with any suggestions, comments remarks or  an offer for a front-end developer position…</p>
        <span role="img" aria-label="wink">😉</span>
      </div>
    </AboutWrap>
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(name: {eq: "me"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About;
