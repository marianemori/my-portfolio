import React from "react";
import { Container, HStack, Image, VStack, Heading, Text, Button } from "@chakra-ui/react";

export interface WorkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  imageSrc,
  description,
  alt,
  link }) => {
  return (
    <Container maxW={'container.xl'} borderRadius={'lg'} boxShadow='2xl' bgColor="#2E3239" p={5}>
      <HStack gap={6} >
        <Image src={imageSrc} alt={alt} h={70} w={70} borderRadius={'lg'} ></Image>
        <VStack align={"start"} gap={2}>
          <Heading size={"md"}>{title}</Heading>
          <Text>{description}</Text>
          <Button
            color={'#FD707F'}
            p={6}
            onClick={() => {
              window.location.href = link;
            }}>Saiba mais</Button>
        </VStack>
      </HStack>
    </Container>
  );
};
