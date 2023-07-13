import React from "react";
import classNames from "classnames";

import styles from "./App.module.css";
import useMediaQuery from "./hooks/useMediaQuery";
import styled from 'styled-components';

const ResponsiveDiv = styled.div`
  ${props => props.isMobile ? `background-color: green` : props.isTablet ? `background-color: violet` : `background-color: yellow`}
`;

const App = () => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  return (
    <>
      <div
      className={classNames([
        styles.layout,
        isMobile && styles.mobile,
        isTablet && styles.tablet,
      ])}
    >
      <h1>{isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}</h1>
    </div>
      <ResponsiveDiv isMobile={isMobile} isTablet={isTablet}>
        <h2>{isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}</h2>
      </ResponsiveDiv>
    </>
  );
};

export default App;
