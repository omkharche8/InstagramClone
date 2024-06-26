import React from 'react'
import { Container, Flex, VStack, Box, Image, Center } from '@chakra-ui/react'
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH = {"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW = {"container.md"} padding ={0}>
            {/* left hand side */}
            <Box display={{base:"none", md: "block"}}>
              <Image src="/auth.png" h={650} alt='Phone img' />
            </Box>
            {/* Right hand side */}
            <VStack spacing={4} align={'center'}>
              <AuthForm/>
              <Box textAlign={'center'}> Get the app.</Box>
              <Flex gap={5} justifyContent={'center'}></Flex>
              <Image src = '/playstore.png' h={10} alt='Playstore logo' />
              <Image src = '/microsoft.png' h={10} alt='Microsoft logo' />
            </VStack>
        </Container>
    </Flex>
  );
};

export default AuthPage;
