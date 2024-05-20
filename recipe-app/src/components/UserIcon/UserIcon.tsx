import React, { CSSProperties } from 'react';
import Image from 'next/image';

export interface UserIconProps {
  imageUrl?: string;
  altText?: string;
  styles?: CSSProperties;
}

const UserIcon: React.FC<UserIconProps> = ({ styles, imageUrl, altText = 'User Icon' }) => {
  const defaultIconUrl = 'https://img.icons8.com/windows/32/FFFFFF/user-male-circle.png';

  const combinedStyles: CSSProperties = {
    borderRadius: '50%',
    ...styles,
  };

  return (
    <div style={combinedStyles}>
      <Image
        src={imageUrl || defaultIconUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default UserIcon;
