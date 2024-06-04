import React, {CSSProperties} from 'react'
import {
    Card,
    Heading,
    Flex,
    Text,
    useTheme,
  } from '@aws-amplify/ui-react';
import StorageImageComponent, { MyStorageImageProps } from "../StorageImage/StorageImageComponent";
import MainDiv from "../MainDivComponent/MainDiv"
import DefaultRecipeImage from "../DefaultRecipeImage/DefaultRecipeImage"

export interface RecipeCardProps extends MyStorageImageProps {
    id?: string,
    recipeName?: string | null | undefined,
    recipeDirections?: string | null | undefined,
    recipeIngredients?: string | null | undefined,
    styles?: CSSProperties,
    key?: string | null | undefined,    

}

const RecipeCard: React.FC<RecipeCardProps> = ({path, alt, recipeName, recipeDirections, recipeIngredients}) => {
    const { tokens } = useTheme();

  return (
    <MainDiv>
    <Card 
    backgroundColor='#27B463'>
      <Flex direction="row" alignItems="flex-start">
      <div className="imageContainer">
      {path ? (
            <StorageImageComponent
              alt={alt}
              path={path}
            />
          ) : (
            <DefaultRecipeImage/>
          )}
          </div>
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