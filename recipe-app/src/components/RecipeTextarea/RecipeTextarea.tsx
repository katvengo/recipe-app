import React from 'react'
import { TextAreaField } from '@aws-amplify/ui-react';

const RecipeTextarea = ({label, name, rows, value, onChange,  ...props}) => {
  const styles = {
    formField: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      marginBottom: '1rem',
      color: 'white',

    },
    label: {
      marginBottom: '0.5rem',
      color: 'black',
      backgroundColor: 'white' /* Different background color */

    },
  }

  return (
    <div style={styles.formField}>    
<TextAreaField
  label={label}
  name={name}
  rows={rows}
  style={styles.label}
  value={value}   
  onChange={onChange}
  />  
  </div>
  )
}

export default RecipeTextarea