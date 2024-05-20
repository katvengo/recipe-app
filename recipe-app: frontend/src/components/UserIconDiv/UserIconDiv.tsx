import React, { CSSProperties } from 'react';
import UserIcon, { UserIconProps } from '../UserIcon/UserIcon';

interface MyIconDivProps {
  onClick?: () => void;
  styles?: CSSProperties;
}

const defaultStyles: CSSProperties = { 
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
};

const UserIconDiv: React.FC<MyIconDivProps & UserIconProps> = ({ styles = defaultStyles, onClick, ...props }) => {
  return (
    <div style={styles} onClick={onClick}>
      <UserIcon {...props} />
    </div>
  );
};

export default UserIconDiv;
