import { Container, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { workList } from "../data/work-list";
import { WorkCard, WorkCardProps } from "./WorkCard";

export const WorkList: React.FC = () => {
  return (
    <Container maxW={"container.xl"} >
      <HStack justify={"space-between"} >
        <VStack justify={"space-between"} align={['center', 'start']} gap={5}>
          <Text fontSize={36} fontWeight={"bold"} color={'#FE479A'} >
            trabalhos.
          </Text>
          <Text fontSize={16} fontWeight={"light"} paddingBottom={8} align={['center', 'start']}>
            Alguns apps que eu já trabalhei, e que estou trabalhando no momento.
          </Text>
          <Grid alignContent={'start'}
            gridTemplateColumns={["repeat(1, minmax(350px, 400px))", "repeat(1, minmax(350px, 400px))", "repeat(2, minmax(350px, 400px))", "repeat(3, minmax(350px, 400px))"]}
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
