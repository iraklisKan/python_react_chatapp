import { Text, Container, Stack } from "@chakra-ui/react";
import Nvarbar from "./components/Nvabar.jsx";
import UserGrid from "./components/UserGrid.jsx";

function App() {
  return (
    <Stack minH={"100vh"}>
      <Nvarbar />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text as={"span"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}
          >My Friends
           </Text>
          🚀
        </Text>
        <UserGrid></UserGrid>
      </Container>
    </Stack>
  );
}

export default App;
