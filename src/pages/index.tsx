import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <strong>Intelligent Robot Systems</strong>
        </Heading>
        <p className="hero__subtitle">16-280, Fall 2026, Carnegie Mellon University</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="margin-vert--lg">
              <Heading as="h1">Course Description</Heading>
              <p>
                This undergraduate course in programming for robotics covers essential topics for designing and implementing cognition algorithms for robotic systems. Students will learn design patterns and implementations for the sense, plan, and act framework in robotics. The course also covers software best practices and tools, including the Robot Operating System (ROS2), Linux administration, and Git. Through hands-on programming assignments and projects, students will gain practical experience implementing these algorithms on real robotic platforms. By the end of the course, students will have a strong foundation in robotics programming and the ability to design and implement cognition algorithms using effective software practices.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--12">
            <div className="margin-vert--lg">
              <Heading as="h2">Course Staff</Heading>
              
              <div className="row">
                <div className="col col--3">
                  <Heading as="h3">Abhi Silwal</Heading>
                  <p>Instructor</p>
                  <p>Robotics Institute</p>
                  <p>Email: asilwal@andrew.cmu.edu</p>
                  <p>Office: NSH 2100D</p>
                </div>

                <div className="col col--2">
                  <Heading as="h3">Aaron Ding</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: aarondin@andrew.cmu.edu</p>
                </div>
                
                <div className="col col--2">
                  <Heading as="h3">Bharath Hegde</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: bharathh@andrew.cmu.edu</p>
                </div>

                <div className="col col--2">
                  <Heading as="h3">Kacper Gasior</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: kgasior@andrew.cmu.edu</p>
                </div>                

                <div className="col col--2">
                  <Heading as="h3">Sachet Korada</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: skorada@andrew.cmu.edu</p>
                </div>
                
                  {/*
                <div className="col col--3">
                  <Heading as="h3">Julius Arolovitch</Heading>
                  <p>Head Teaching Assistant</p>
                  <p>Email: jarolovi@andrew.cmu.edu</p>
                </div>

                <div className="col col--3">
                  <Heading as="h3">Kacper Gasior</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: kgasior@andrew.cmu.edu</p>
                </div>

                <div className="col col--3">
                  <Heading as="h3">Alex Dietrich</Heading>
                  <p>Teaching Assistant</p>
                  <p>Email: ajdietri@andrew.cmu.edu</p>
                </div>
                */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Course website for 16-280 Intelligent Robotic Systems">
      <HomepageHeader />
      <HomepageContent />
    </Layout>
  );
}
