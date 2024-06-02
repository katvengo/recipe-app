import React from 'react'
import { TextAreaField } from '@aws-amplify/ui-react';

interface MyTextareaProps {
  label: string,
  name: string,
  rows: number,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const RecipeTextarea: React.FC<MyTextareaProps>  = ({label, name, rows, value, onChange}) => {
  const styles = {
    formField: {
      display: 'flex',
      // eslint-disable-next-line @typescript-eslint/prefer-as-const
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