import { Box, Flex } from '@chakra-ui/react';
import Titulo from '/images/Titulo.png';

function Header() {
  return (
    <Box bg={'rgb(231,246,223)'} p={5} color={'rgb(54,53,55)'}>
      <Flex align={'center'} justify={['center', 'flex-start']}>
        <img src={Titulo} alt='' />
      </Flex>
    </Box>
  );
}

export default Header;