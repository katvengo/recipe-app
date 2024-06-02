import React from 'react'
import { Heading} from '@aws-amplify/ui-react';
import MainDiv from '../../MainDivComponent/MainDiv';

export interface WelcomeTitleProps {
  username?: string | null | undefined;
  level?: number
}


const Welcome: React.FC<WelcomeTitleProps> = ({
  username
}) => {

  return (
    <MainDiv>
      <span>      
    <Heading level={3}>Welcome, {username}</Heading>
      </span>
    </MainDiv>
  )
}

export default Welcome