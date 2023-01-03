import React from "react";
import { Container, Text, VStack, HStack, Image, Button, useMediaQuery } from "@chakra-ui/react";
import MyImage from "../assets/my-image.png";

export const Banner: React.FC = () => {

  return (
    <Container maxW={"container.full"} bgColor="#2E3239">
      <Container maxW={"container.xl"} py={24}>
        <HStack justify={"space-between"} >
          <VStack justify={"space-between"} maxW={"container.sm"} align={['center', 'start']} >
            <Text fontSize={20} fontWeight={"medium"} >
              Olá, eu sou a Mari
            </Text>
            <Text fontSize={"6xl"} textAlign={['center', 'start']} fontWeight={"bold"} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
              Flutter
              Mobile
              Developer
            </Text>
            <Text fontSize={20} fontWeight={"medium"} paddingBottom={8}>
              no Grupo Card
            </Text>
            <Button  onClick={() => {
              window.location.href = "https://drive.google.com/file/d/1D5827EjEFM9YzgTxcN07tBR7ZIO-n7qH/view?usp=share_link";
            }} color={'#71C1E1'} p={5} >Currículo</Button>
          </VStack>

          <Image src={MyImage.src} display={{ base: "none", md: "flex" }}
            alt="My image"
            fit={'contain'}
            minH={100}
            minW={120}
            height={360}
            width={380}>
          </Image>
        </HStack>
      </Container>
    </Container>
  );
};
