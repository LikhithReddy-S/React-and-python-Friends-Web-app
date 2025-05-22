import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";

function CreateUsetModel({ setUsers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(BASE_URL + "/api/friends", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        status: "success",
        title: "Yayy! 🎉",
        description: "Friend created successfully.",
        duration: 2000,
        position: "top-center",
      });

      onClose();
      setUsers((prevUsers) => [...prevUsers, data]);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    } catch (error) {
      toast({
				status: "error",
				title: "An error occurred.",
				description: error.message,
				duration: 4000,
			});
    } finally {
      
    }
  };
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader>My new BFF 😍</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder="He's a Software engineer who loves to code and build things."
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
                <RadioGroup mt={4}>
                  <Flex gap={4}>
                    <Radio
                      value="male"
                      onChange={(e) =>
                        setInputs({ ...inputs, gender: e.target.value })
                      }
                    >
                      Male
                    </Radio>
                    <Radio
                      value="female"
                      onChange={(e) =>
                        setInputs({ ...inputs, gender: e.target.value })
                      }
                    >
                      Female
                    </Radio>
                  </Flex>
                </RadioGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add
              </Button>
              <Button onClick={onClose} mr={3}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default CreateUsetModel;
