import React, { useContext } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { AppContext } from '../context/ContextProvider'
import Task from './Task';
import AddButton from './AddButton';
import EditPanel from './EditPanel';

function Todo() {
    const [state] = useContext(AppContext);
    const { tasks } = state;

    return (
        <Container minWidth={1100} shadow="sm" borderWidth={1} rounded={5} p={5}>
            <Box display="flex">
                <Box flex="1 1" flexBasis="auto" bg="gray.100" p={4}>

                    <Text fontSize={20} fontWeight={700} mb={2}>Task List</Text>
                    {
                        tasks.map((task, index) => {
                            return <Task key={task.id} task={task} index={index + 1} />
                        })  
                    }

                    {
                        tasks.length === 0 && <AddButton index={0} />
                    }
                   
                </Box>
                <EditPanel />
            </Box>
        </Container>
    )
}

export default Todo
