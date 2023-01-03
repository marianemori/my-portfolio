import React from "react";
import {  Container, Heading, HStack, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const Header: React.FC = () => {
  return (
    <Container maxW={"container.xl"}>
      <HStack justify={"space-between"} py={6}  >
        <Heading size={"md"} fontWeight={"extrabold"}>
          Mariane Mori
        </Heading>
        <HStack gap={6}> 
          <Link href="https://github.com/marianemori">
            <BsGithub size={25} />
          </Link>
          <Link href="https://www.linkedin.com/in/mariane-mori/">
            <BsLinkedin size={25}  />
          </Link>
          <Link href="https://www.instagram.com/morimariane">
            <BsInstagram size={25} />
          </Link>
        </HStack>
      </HStack>
    </Container>
  );
};
