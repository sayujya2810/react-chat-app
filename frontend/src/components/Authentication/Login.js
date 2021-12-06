import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { FormControl } from '@chakra-ui/form-control'
import { InputGroup } from '@chakra-ui/input'
import { InputRightElement } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const history = useHistory()

    const handleClick = () => setShow(!show)


    const submitHandler = async() => {
        setLoading(true);

        if( !email || !password  ){
            toast({
                title:"Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                header: {
                    "Content-type":"application/json"
                }
            }

            const {data} = await axios.post("/api/user/login",{email,password},config);

            toast({
                title:"Logged in Successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position:"bottom",
            })
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false);
            history.push("/chats")

        } catch (error) {
            toast({
                title:"Error Occured",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position:"bottom",
            })
            setLoading(false);
        }
     };

    return (
        <VStack spacing='5px'>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>

                    <Input
                    type={show ? "text" : "password"}
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>

                    <InputRightElement width="4.5rem">
                        <Button
                            h="2.75rem"
                            size="sm"
                            onClick ={handleClick}>

                                {show ? "Hide" : "Show"}

                        </Button>
                    </InputRightElement>

                </InputGroup>
            </FormControl>

            <Button
             colorScheme="blue"
             width="100%"
             style={{marginTop: 15}}
             onClick={submitHandler}
             isLoading={loading} >
                Login
            </Button>

            <Button
                variant="solid"
                colorScheme="teal"
                width="100%"
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }} >
                get Guest Use Creds
            </Button>


        </VStack>
    )
}

export default Login
