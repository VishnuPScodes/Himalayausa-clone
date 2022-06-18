import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
  } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../components/firebase/firebase';
import { authActionFailure, authActionRequest, authActionSuccess } from '../redux/action';
import { useDispatch ,useSelector} from 'react-redux';  
import { async } from '@firebase/util';
  export const SignIn=()=> {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const loading=useSelector(state=>state.loading)
    const handleSignin=async ()=>{
      dispatch(authActionRequest())
      console.log(email,password)
      try{
        const user=await signInWithEmailAndPassword(auth,email,password)
          dispatch(authActionSuccess())
       
       
      }catch(e){
          console.log('err',err.message)
          dispatch(authActionFailure())
      }
    }
    return <div> 
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Already Registered?</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Login 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={((e)=>{
                  setEmail(e.target.value)
                })} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={((e)=>{
                  setPassword(e.target.value)
                })} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'#a3b49b'}
                  color={'white'}
                  _hover={{
                    bg: '#5a6952',
                  }} onClick={handleSignin}>
                  {loading==true?<Spinner/>:"Sign in"}
                </Button>
               
                <div style={{width:"340px",margin:"auto",textAlign:"left"}}>   
                <h2>New Costomer?</h2>
                <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                
                </div>
                <Button style={{}}
                  bg={'#5a6952'}
                  color={'white'}
                  _hover={{   
                    bg: ' #a3b49b',
                  }}
                  onClick={(()=>{
                    navigate('/Register')
                  })}>
                  CREATE AN ACCOUNT
                </Button>
                
              </Stack>
            </Stack>
          </Box>
         
        </Stack>
       
      </Flex>


      </div>
  }