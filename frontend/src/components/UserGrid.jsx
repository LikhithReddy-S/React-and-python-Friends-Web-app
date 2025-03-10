import { Card, Box, Grid, SimpleGrid ,CardHeader,Flex,Avatar,Heading,Text,IconButton,CardBody,CardFooter,Button} from "@chakra-ui/react";
import { USERS } from "../dummy/dummy";
import UserCard from "./UserCard";

function UserGrid() {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      padding={"10px"}
      spacing={"10px"}
    >
      {USERS.map(user=>
        <UserCard user = {user} />
      )}
    </SimpleGrid>
  );
}

export default UserGrid;
