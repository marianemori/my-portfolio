import React from "react";
import { Container, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import MobileDevelopment from "../assets/mobile-development.png";

export const About: React.FC = () => {
  return (
      <Container maxW={"container.xl"} py={20}>
        <HStack justify={"space-between"} >
          <VStack justify={"space-between"} align={"start"} maxW={'container.sm'} gap={5}>
            <Text fontSize={52} fontWeight={"bold"} color={'#FE479A'}>
              about.
            </Text>
            <Text fontSize={20} fontWeight={"medium"} paddingBottom={8}>
              Tenho 22 anos, sou formada em Sistemas de Informação na UFMS.
              Estou trabalhando atualmente em desenvolvimento mobile com Flutter no Grupo Card desde 2021.
            </Text>
          </VStack>
          <Image src={MobileDevelopment.src} alt="Mobile development"
            height={450}
            width={460}>
          </Image>
        </HStack>
      </Container>
  );
};
