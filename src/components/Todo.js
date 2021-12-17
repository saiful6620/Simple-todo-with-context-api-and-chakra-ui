import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import EditPanel from './EditPanel';
import TaskList from './TaskList';

const Todo = () => {

    console.log("Todo Render");

    return (
        <Container maxWidth={1100} shadow="sm" borderWidth={1} rounded={5} p={5}>
            <Box display="flex">
                <Box flex="1 1" flexBasis="auto" bg="gray.100" p={4}>
                   <TaskList />
                </Box>
                <EditPanel />
            </Box>
        </Container>
    )
}

export default Todo
