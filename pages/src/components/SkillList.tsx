import { Container, Grid, Heading, Box, VStack, Text, Center } from "@chakra-ui/react";
import { skillList } from "../data/skill-list";
import { SkillCard, SkillCardProps } from "./SkillCard";

export const SkillList = () => {
  return (
    <>
      <Container maxW={"container.xl"} paddingBottom={10} >
        <Text fontSize={52} fontWeight={"bold"} color={'#FE479A'}>
          skills.
        </Text>
      </Container>
      <Container maxW={"container.full"} py={20} bgColor="#2E3239"  >
        <Container>
        <Grid  justifyContent={'center'}
          gridTemplateColumns={"repeat(7, 115px)"}
          rowGap={6}
          columnGap={10}
          >
          {skillList.map((project: SkillCardProps, index: number) => (
            <SkillCard key={index} {...project} />
            ))}
        </Grid>
            </Container>
      </Container>

    </>

  );
};
