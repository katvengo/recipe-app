import React, { CSSProperties } from "react";

export interface MainDivProps {
    styles?: {
      container?: CSSProperties;
    };
    children?: React.ReactNode
  }

const defaultStyles = {
    container: {
      borderRadius: "1em",
      padding: "20px",
      color: "white",
    } as CSSProperties,
  };
  
const MainDiv: React.FC<MainDivProps> = ({children, styles = defaultStyles}) => {
    const appliedStyles = { ...defaultStyles, ...styles };

  return (
    <div style={appliedStyles.container} className="sub-container"> 
    {children}
    </div>
  )
}

export default MainDiv