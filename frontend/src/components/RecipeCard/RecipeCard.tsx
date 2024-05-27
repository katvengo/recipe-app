import React, {CSSProperties} from 'react'
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
import MainDiv from "../MainDivComponent/MainDiv"

interface RecipeCardProps extends MyImageProps {
    src?: string,
    alt?: string,
    id?: string,
    recipeName?: string | null | undefined,
    recipeDirections?: string | null | undefined,
    recipeIngredients?: string | null | undefined,
    recipeImage?: string | null | undefined,
    styles?: CSSProperties,
    key?: string | null | undefined

}
const RecipeCard: React.FC<RecipeCardProps> = ({key, styles, src, alt, id, recipeName, recipeDirections, recipeIngredients, recipeImage}) => {
    const { tokens } = useTheme();

  return (
    <MainDiv key={key}>
    <Card 
    backgroundColor='#27B463'>
      <Flex direction="row" alignItems="flex-start">
      {src && (
        <Image
          alt={alt}
          src={src}
          styles={{ width: "33%" }}
        />)}
        <Flex
          direction="column"
          alignItems="flex-start"
          gap={tokens.space.xs}
        >
          <Heading level={3}>{recipeName}</Heading>
          <hr />
          <Text as="span" fontWeight={600} fontSize="22px">
            Ingredients         
          </Text>
          <Text as="span" >
            {recipeIngredients}
          </Text>
          <Text as="span" fontWeight={600} fontSize="22px">
            Directions         
          </Text>
          <Text as="span">
            {recipeDirections}
          </Text>
        </Flex>
      </Flex>
    </Card>
  </MainDiv>  )
}

export default RecipeCard