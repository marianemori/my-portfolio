import React from "react";
import { Container, Text, VStack, HStack, Image, Box } from "@chakra-ui/react";
import MobileDevelopment from "../assets/mobile-development.png";

export const About: React.FC = () => {

  return (
    <Container maxW={"container.xl"} py={20} h={"container.sm"}>
      <HStack justify={"space-between"} align={['start', 'center']} >
        <VStack justify={"space-between"} maxW={'container.sm'} gap={5} align={['center', 'start']}  paddingBottom={12}>
          <Text fontSize={36} fontWeight={"bold"} color={'#FE479A'}  >
            sobre.
          </Text>
          <Text fontSize={16} fontWeight={"light"} paddingBottom={18} align={['center', 'start']}>
            Meu nome é Mariane Mori Guiraldelli, tenho 22 anos, sou formada em Sistemas de Informação na UFMS.
            <br></br>
            Estou trabalhando atualmente em desenvolvimento mobile com Flutter no Grupo Card em Campo Grande/MS.
          </Text>
            <Image src={MobileDevelopment.src} alt="Mobile development"
              display={{ base: "flex", md: "none" }}
              height={300}
              width={300}></Image>
        </VStack>
        <Image src={MobileDevelopment.src} alt="Mobile development"
          display={{ base: "none", md: "flex" }}
          height={450}
          width={460}>

        </Image>
      </HStack>
    </Container>
  );
};
