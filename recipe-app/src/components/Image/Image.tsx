import React from 'react'
import { Image } from '@aws-amplify/ui-react';


interface MyImageProps {
src: string,
alt: string
}

const RecipeImage: React.FC<MyImageProps> = ({src, alt}) => {
    const styles = {
        logo: {
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginTop: 50,
            marginBottom: 50,
        },
    }
  return (
<Image
      src={src}
      alt={alt}
    
    />  )
}

export default RecipeImage