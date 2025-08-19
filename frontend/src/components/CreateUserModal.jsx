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
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Flex alignItems="center" gap={4}>
              {/* //left Side */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              {/* //right Side */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Dev" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="he is a software developer with a passion for coding and problem-solving."
              />
            </FormControl>

            <RadioGroup defaultValue="male" mt={4}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
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
