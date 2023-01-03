import { Container, Grid, Text, VStack } from "@chakra-ui/react";
import { skillList } from "../data/skill-list";
import { SkillCard, SkillCardProps } from "./SkillCard";

export const SkillList: React.FC = () => {
  return (
    <Container maxW={"full"} p={0}>
      <VStack align={['center', 'start']} >
        <Container maxW={"container.xl"} textAlign={'start'} py={10} >
          <Text fontSize={36} fontWeight={"bold"} textAlign={['center', 'start']} color={'#FE479A'}>
            skills.
          </Text>
        </Container>
        <Container maxW={"full"} py={20} bgColor={"#2E3239"} >
          <Container>
            <Grid justifyContent={'center'}
              gridTemplateColumns={["repeat(2, 115px)", "repeat(3, 115px)", "repeat(4, 115px)", "repeat(7, 115px)"]}
              columnGap={10}
            >
              {skillList.map((project: SkillCardProps, index: number) => (
                <SkillCard key={index} {...project} />
              ))}
            </Grid>
          </Container>
        </Container>
      </VStack>
    </Container>

  );
};
