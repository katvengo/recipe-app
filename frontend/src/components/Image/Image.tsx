import React, { CSSProperties} from 'react'
import { Image } from '@aws-amplify/ui-react';


export interface MyImageProps {
src?: string,
alt?: string,
styles?: CSSProperties
}

const RecipeImage: React.FC<MyImageProps> = ({src, alt, styles}) => {

  return (
<Image
      src={src}
      alt={alt}
      style={styles}
    />  )
}

export default RecipeImage