import React, { useState } from 'react';
import { Box, Button, Image, Text, Container } from '@chakra-ui/react';
import './History.css';


const History = ({ tasks }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (

    <Container className='history'>

      <Box
        display={'flex'}
        alignItems={'center'}
        textAlign={'left'}
        flexDirection={'column'}
        border={'1px solid white'}
        borderRadius={'20'}
        padding={'10'}
        bg={'white'}
        width={'100%'}
        height={'100%'}
        className={showHistory ? 'active' : ''}
      >
        <Button bg={'white'} onClick={() => setShowHistory(!showHistory)} >
          <Image src="./images/tarea.png" width="70px" alt="task" />
            Task:
        </Button>

        {showHistory && (
          <Box
            className='history-content'
            textAlign={'left'}
            alignItems={'center'}
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            width={'100%'}
            height={'100%'}
            maxW={'100%'}
            bg={' rgb(255, 255, 255)'}
            border={'1px solid white'}
            borderRadius={'20'}
            padding={'10'}
            p={8}
            mt={'3'}
          >
            <Image src="/images/history.png" alt="history" boxSize="10" mr={3} />
              History:
            <Text fontWeight={'bold'} >
            </Text>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>


          </Box>
        )}

      </Box>

    </Container>
  );
};

export default History;