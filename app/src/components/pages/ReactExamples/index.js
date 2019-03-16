import React from "react";
import { Route, Link } from "react-router-dom";
import Props from "./Examples/Props";
import {
  Container,
  Hero,
  HeroBody,
  HeroFooter,
  Title,
  Tab,
  Tabs,
  TabList
} from "bloomer";

function ReactExamples(props) {

  return (
    <>
      <Hero isColor="info" isSize="medium">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>React Examples</Title>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive={props.location.pathname === `${props.match.path}/overview`}>
                    <Link to={`${props.match.path}/overview`}>Overview</Link>
                </Tab>
                <Tab isActive={props.location.pathname === `${props.match.path}/grid`}>
                    <Link to={`${props.match.path}/grid`}>Grid</Link>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
      <Route path={`${props.match.path}/overview`} component={Props} />
    </>
  );
}

export default ReactExamples;
