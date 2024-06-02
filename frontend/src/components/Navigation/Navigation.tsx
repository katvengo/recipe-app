'use client';

import React from "react";
import {
  Menu,
  MenuItem,
  View,
  Flex,
} from "@aws-amplify/ui-react";
import Link from 'next/link';
import Title from "../Title/Title";
import UserIconDiv from "../UserIconDiv/UserIconDiv";
import "@aws-amplify/ui-react/styles.css";
import "../../styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';

export const Navigation: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <View className="view">
      <Menu size="large">
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        {/* <MenuItem>
          <Link href="/recipes">Recipes</Link>
        </MenuItem> */}
        <MenuItem onClick={signOut}>Sign Out</MenuItem> 
      </Menu>
      <Title></Title>
      <Flex alignItems="center">
        <Link href={`/users/${user?.userId}`} passHref replace>
        <UserIconDiv altText="User Icon" />
        </Link>
      </Flex>
    </View>
  );
};
