import React from 'react'

interface TitleProps {
  fontSize?: string; // Specify the type of the fontSize prop as string (with an optional '?')
}

const Title: React.FC<TitleProps> = ({fontSize}) => {


  const styles = {
    h1: {
      color: "white",
      fontSize: fontSize || "32px"
    }
  }
  return (
    <>
    <div className="container">
      <h1 style={styles.h1}>PrepCado</h1>
      </div>
    </>
      )
}

export default Title