import React from "react";
import { Container, Text, Image, VStack } from "@chakra-ui/react";

export interface SkillCardProps {
  title: string;
  imageSrc: string;
  alt: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  imageSrc,
  alt, }) => {
  return (
    <Container maxW={'container.sm'} p={5}>
      <VStack align={"center"} gap={2}>
        <Image src={imageSrc} objectFit='cover' alt={alt} h={70} w={70} borderRadius={'xl'} bg={'#FFF'} ></Image>
        <Text textAlign={'center'}>{title}</Text>
      </VStack>
    </Container>
  );
};
