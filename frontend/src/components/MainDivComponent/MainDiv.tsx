import React, { CSSProperties } from "react";

export interface MainDivProps {
    styles?: CSSProperties;
    children?: React.ReactNode
  }

const defaultStyles: CSSProperties = {
      borderRadius: "1em",
      padding: "20px",
      color: "white",
    
  };
  
const MainDiv: React.FC<MainDivProps> = ({children, styles = {}}) => {
  const appliedStyles = { ...defaultStyles, ...styles };

  return (
    <div style={appliedStyles} className="sub-container"> 
    {children}
    </div>
  )
}

export default MainDiv