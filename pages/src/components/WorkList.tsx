import { Container, Grid, Heading, HStack, VStack , Text} from "@chakra-ui/react";
import { workList } from "../data/work-list";
import { WorkCard, WorkCardProps } from "./WorkCard";

export const WorkList = () => {
  return (
    <Container maxW={"container.xl"} h={"container.md"}>
    <HStack justify={"space-between"} >
      <VStack justify={"space-between"} align={"start"} gap={5}>
        <Text fontSize={52} fontWeight={"bold"} color={'#FE479A'}>
          work.
        </Text>
        <Text fontSize={20} fontWeight={"medium"} paddingBottom={8}>
          Alguns apps que eu já trabalhei, e que estou trabalhando no momento.
        </Text>
        <Grid
          gridTemplateColumns={"repeat(3, minmax(400px, 350px))"}
          gap={8}
        >
          {workList.map((project: WorkCardProps, index: number) => (
            <WorkCard key={index} {...project} />
          ))}
        </Grid>
      </VStack>
    </HStack>
  </Container>


  );
};
