import { Box } from '@chakra-ui/react'
import Todo from './components/Todo';
import AppContextProvider from './context/ContextProvider';

function App() {
  return (
    <Box p={4}>
      <AppContextProvider>
          <Todo />
      </AppContextProvider>
    </Box>
  );
}

export default App;
