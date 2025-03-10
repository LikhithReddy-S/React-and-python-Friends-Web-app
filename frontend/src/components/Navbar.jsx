import { Container, Flex,useColorMode ,Box, Text, Button, useColorModeValue} from '@chakra-ui/react'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUsetModel from './CreateUsetModel';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} bg={useColorModeValue("gray.200","gray.700")} borderRadius={5}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} justifyContent={"centre"} gap={3} display={{base:"none",sm:"flex"}}>
              <img src="./react.png" alt="react-png" width={50}  height={50}/>
              <Text fontSize={"40px"}>+</Text>
              <img src="./python.png" alt="python-png" width={50}  height={50}/>
              <Text fontSize={"40px"}>=</Text>
              <img src="./explode.png" alt="explode-png" width={50}  height={50}/>
          </Flex>
          <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
            <Text fontSize={"lg"} fontWeight={500} display={{base:"none",md:"block"}}>
              BFFship🔥
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <IoMoon/> : <LuSun size={20}/>}
            </Button>
            <CreateUsetModel />
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default Navbar
