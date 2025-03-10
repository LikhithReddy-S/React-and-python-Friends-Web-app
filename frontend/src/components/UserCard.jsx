import { Card, Box,CardHeader,Flex,Avatar,Heading,Text,IconButton,CardBody} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
function UserCard({user}) {
  return (
    <Card>
            <CardHeader>
              <Flex gap={4}>
                <Flex flex="1" gap="4" alignItems="center">
                  <Avatar name={user.name} src="https://avatar.iran.liara.run/public/boy" />
    
                  <Box>
                    <Heading size="sm">{user.name}</Heading>
                    <Text>{user.role}</Text>
                  </Box>
                </Flex>
                <Flex>
                    <EditModal user = {user}/>
                    <IconButton 
                    variant={"ghost"}
                    colorScheme="red"
                    size={"sm"}
                    aria-label="see menu"
                    icon={<BiTrash size={20}/>}
                    
                    />

                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                {user.description}
              </Text>
            </CardBody>
          </Card>
    
  )
}

export default UserCard
