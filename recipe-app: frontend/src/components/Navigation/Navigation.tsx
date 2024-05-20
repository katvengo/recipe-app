import React from "react";
import {
  Menu,
  MenuItem,
  View,
  Link,
  Flex,
  useTheme,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Title from "../Title/Title";
import UserIconDiv from "../UserIconDiv/UserIconDiv";
import "@aws-amplify/ui-react/styles.css";
import "../../styles.css";
import customTheme from "../../theme";

export const Navigation: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { tokens } = useTheme();

  return (
    <View className="view">
      <Menu size="large">
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/recipes">Recipes</Link>
        </MenuItem>
        <MenuItem onClick={signOut}>Sign Out</MenuItem>
      </Menu>
      <Title style={{ textAlign: "center" }}></Title>
      <Flex alignItems="center">
        <UserIconDiv altText="User Icon" />
      </Flex>
    </View>
  );
};
