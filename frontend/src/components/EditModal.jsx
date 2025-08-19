import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
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
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import { BASE_URL } from "../App.jsx";



function EditModal({ setUsers, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: user.name,
    role: user.role,
    description: user.description || "",
    gender: user.gender,
  });
  const toast = useToast();

  const handleEditUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/friends/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? data : u))
      );
      toast({
        title: "User Updated",
        description: "Your friend's details have been updated successfully!",
        status: "success",
        duration: 2000,
        position: "top-center",
      });
      onClose();
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
    }
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        colorScheme="blue"
        aria-label="See menu"
        size={"sm"}
        icon={<BiEditAlt size={20} />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleEditUser}>
          <ModalContent>
            <ModalHeader>Edit Friend 😍</ModalHeader>
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
                  overflowY={"hidden"}
                  placeholder="He's a software engineer who loves to code and build things."
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
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
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isLoading}
              >
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;
