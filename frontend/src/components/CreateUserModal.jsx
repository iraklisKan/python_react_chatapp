import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  useDisclosure,
  Textarea,
  Radio,
  RadioGroup,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const BASE_URL = "http://localhost:5000/api";

const CreateUserModal = ({ setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const toast = useToast();

  const handleCreateUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      toast({
        title: "User Created",
        description: "Your friend has been added successfully!",
        status: "success",
        duration: 2000,
        position: "top-center",
      });
      onClose();
      // Update the users list by adding the new user
      setUsers((prevUsers) => [...prevUsers, data]);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My New Friend 🔥</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Flex alignItems="center" gap={4} width="100%">
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
                    placeholder="Software Dev"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="he is a software developer with a passion for coding and problem-solving."
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  value={inputs.gender}
                  onChange={(value) => setInputs({ ...inputs, gender: value })}
                >
                  <Flex gap={5}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Flex>
                </RadioGroup>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleCreateUser}
              isLoading={isLoading}
            >
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
