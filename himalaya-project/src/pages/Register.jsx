


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import {createUserWithEmailAndPassword,onAuthStateChanged, updateCurrentUser,signOut, signInWithEmailAndPassword} from 'firebase/auth'
  import {auth} from '../components/firebase/firebase'
  

  // import { useAuth } from '../components/contexts/authContext';
  // const {register}=useAuth()
  import { useRef, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
  
  export const  Register=()=> {
    const [user,setUser]=useState({})
    onAuthStateChanged(auth,(updateCurrentUser)=>{
      setUser(updateCurrentUser)
    })
    const navigate=useNavigate()
    const[formData,setFormData]=useState([])
    const [showPassword, setShowPassword] = useState(false);
    const handleChange=((e)=>{
     const {id,value}=e.target
     setFormData({...formData,
    [id]:value
  })
})


 
    
   
  
    const handleSubmit=async ()=>{
      
      try{
        const user=await signInWithEmailAndPassword(auth,formData.email,formData.password)
        console.log('user',user)
        navigate('/')

      }catch(err){
        console.log('error',err.message)
      }
      
    }
    const signOutfxn=(()=>{
     signOut(auth)
    })
    const emailRef=useRef();
    const passwordRef=useRef();
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create an Account
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Personal information
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input id='firstName'  type="text" />
                  </FormControl>
                </Box>
                <br/>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input id='lastName' type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input id='email' ref={emailRef} onChange={handleChange} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input id='password' ref={passwordRef} onChange={handleChange} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'#a3b49b'}
                  color={'white'}
                  _hover={{
                    bg: '#5a6952',
                  }}>
                  CREATE
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        <Button onClick={signOutfxn}> Sign oUT</Button>
        </Stack>
        {user?.email}
      </Flex>
     
    );
  }
