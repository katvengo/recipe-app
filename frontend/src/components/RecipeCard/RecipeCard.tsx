import React from 'react'
import {
    Card,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
import Image, { MyImageProps } from "../Image/Image";

interface RecipeCardProps extends MyImageProps {
    src?: string,
    alt?: string,
    recipeName?: string,
    recipeDirections?: string,
    recipeIngredients?: string
}
const RecipeCard: React.FC<RecipeCardProps> = ({src, alt, recipeName, recipeDirections, recipeIngredients}) => {
    const { tokens } = useTheme();

  return (
    <View
    backgroundColor='#27B463'
    padding={tokens.space.medium}
  >
    <Card>
      <Flex direction="row" alignItems="flex-start">
        <Image
          alt={alt}
          src={src}
          styles={{width:"33%"}}
        />
        <Flex
          direction="column"
          alignItems="flex-start"
          gap={tokens.space.xs}
        >
          <Heading level={5}>{recipeName}</Heading>

          <Text as="span">
            {recipeIngredients}
          </Text>
          <Text as="span">
            {recipeDirections}
          </Text>
        </Flex>
      </Flex>
    </Card>
  </View>  )
}

export default RecipeCard