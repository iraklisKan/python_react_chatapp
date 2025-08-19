import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import EditModal from "./EditModal.jsx";
import { BASE_URL } from "../App.jsx";
import { useToast } from "@chakra-ui/react";

function UserCard({ user,setUsers }) {
    const toast = useToast();
    const handleDeleteUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/friends/${user.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      toast({
        title: "User Deleted",
        description: "Your friend has been removed successfully!",
        status: "success",
        duration: 2000,
        position: "top-center",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src={user.imgUrl}/>
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal user={user} />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="Delete user"
              icon={<BiTrash size={20} />}
                onClick={handleDeleteUser}
                    // Handle delete user logic here
                
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
}

export default UserCard;
