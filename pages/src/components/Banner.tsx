import React from "react";
import { Container, Text, VStack, HStack, Image, Button } from "@chakra-ui/react";
import MyImage from "../assets/my-image.png";

export const Banner: React.FC = () => {
  return (
    <Container maxW={"container.full"} bgColor="#2E3239">
      <Container maxW={"container.xl"} py={24}>
        <HStack justify={"space-between"} >
          <VStack justify={"space-between"} maxW={"container.sm"} align={"start"} >
            <Text fontSize={24} fontWeight={"medium"} >
              Olá, eu sou a Mari
            </Text>
            <Text fontSize={64} fontWeight={"bold"} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
              Flutter
              Mobile
              Developer
            </Text>
            <Text fontSize={24} fontWeight={"medium"} paddingBottom={8}>
             no Grupo Card
            </Text>
            <Button color={'#71C1E1'} p={6} >Currículo</Button>
          </VStack>
          <Image src={MyImage.src} alt="My image"
          height={360}
          width={380}>
          </Image>
        </HStack>
      </Container>
    </Container>
  );
};
