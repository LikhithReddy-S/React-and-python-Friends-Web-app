import {
  Card,
  Box,
  Grid,
  CircularProgress,
  SimpleGrid,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

function UserGrid({ users, setUsers }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://python-react-freinds-app-backend.onrender.com/api/friends");
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          throw new error(data.error);
        }
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [setUsers]);
  return (
    <>
      {isLoading && (
        <Flex justifyContent={"center"}>
          <CircularProgress isIndeterminate color="green.300" />
        </Flex>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={"10px"}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
        
      </SimpleGrid>
      {!isLoading && users.length === 0 && (
          <Flex justifyContent={"center"}>
            <Text fontSize={"xl"}>
              <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
                Poor you! 🥺
              </Text>
              Make some friends bro.
            </Text>
          </Flex>
        )}
    </>
  );
}

export default UserGrid;
