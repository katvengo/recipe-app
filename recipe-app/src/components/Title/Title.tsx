import React from 'react'

const Title = ({...props}) => {

  const styles = {
    h1: {
      color: "white",
      fontSize: "32px"
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