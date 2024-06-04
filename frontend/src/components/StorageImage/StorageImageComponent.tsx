import React, { CSSProperties } from 'react'
import { StorageImage, StorageImageProps } from '@aws-amplify/ui-react-storage' ;
import { StorageImagePathProps } from '@aws-amplify/ui-react-storage/dist/types/components/StorageImage/types';

 export interface MyStorageImageProps {
  alt: string,
  path: StorageImagePathProps['path'];
 }
 
const StorageImageComponent: React.FC<MyStorageImageProps> = ({alt, path}) => {
  return (
    <>
    <StorageImage
      alt={alt}
      path={path}
    />
    </>
  )
}

export default StorageImageComponent
