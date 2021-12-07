import React, { useContext }  from 'react';
import { Box, Text, Stack, ScaleFade } from '@chakra-ui/react';
import AddButton from './AddButton';
import { AppContext } from '../context/ContextProvider'

function Task({task, index}) {
    const [state, dispatch] = useContext(AppContext);
    
    const selectHandler = (index) => {
        dispatch({
            type: 'SELECT_TASK',
            payload: {
                index: index - 1
            }
        })
    }

    return (
        <ScaleFade initialScale={0.8} in={true}>
        <Box p={4} borderWidth={1} rounded={4} bg="#FFFFFF" mb={2} onClick={() => selectHandler(index)}>
            <Text fontSize="1.2rem" fontWeight="500" lineHeight="1.2">{task.title}</Text>
            <Text fontSize="1rem" fontWeight="400" mb={1}>{task.description}</Text>
            <Box display="flex" flexDir="column" mb={3}>
                <Text fontSize=".8rem" fontWeight="300" mr="10px">Author: {task.author.name}</Text>
                <Text fontSize=".8rem" fontWeight="300">Email: {task.author.email}</Text>
            </Box>
            <Stack direction="row" spacing="20px">
                <Box w={8} h={8} rounded="25px" bg="red.400" 
                    boxShadow={task.color.red ? "0 2px 16px red, 0 0px 10px red" : "none"}
                />
                <Box w={8} h={8} rounded="25px" bg="yellow.400" 
                    boxShadow={task.color.yellow ? "0 2px 16px yellow, 0 0px 10px yellow" : "none"}
                />
                <Box w={8} h={8} rounded="25px" bg="green.400"
                    boxShadow={task.color.green ? "0 2px 16px green, 0 0px 10px green" : "none"}
                />
            </Stack>
        </Box>
        <AddButton index={index} />
        </ScaleFade>
    )
}

export default Task
