import React, { useEffect, useState } from 'react'
import {Text, Flex, Grid ,Spinner } from '@chakra-ui/react'
import { BASE_URL } from '../App.jsx'

import UserCard from './UserCard.jsx'

const UserGrid = ({ users,setUsers}) => {

    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)    
    useEffect(() => {
        const getUsers = async () => {
            try{
                const response = await fetch(BASE_URL +'/friends')
                const data = await response.json()

                if (!response.ok) { 
                    throw new Error(data.error)
                }
                setUsers(data)
            }
            catch (err) {
                console.error(err)
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        getUsers();
    }, [setUsers]);
  return (
    <>
    <Grid 
      templateColumns={{
        base: "1fr", 
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      }}
      gap={4}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} setUsers={setUsers} />
      ))}
    </Grid>
    {isLoading && (
        <Flex justify={"center"}>
            <Spinner size='xl' />   
        </Flex>
    )}

    {!isLoading && error && (
        <Flex justify={"center"} mt={8}>
            <Text fontSize={"xl"} color={"red.500"}>
                Error: {error}
            </Text>
        </Flex>
    )}

    {!isLoading && users.length === 0 && !error && (
        <Flex justify={"center"} mt={8}>
            <Text fontSize={"xl"} color={"gray.500"}>
                <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
                    poor you!
                </Text>
                you have no friends yet!
            </Text>
        </Flex>
    )}
    </>
  )
  
}   

export default UserGrid