import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { FormControl } from '@chakra-ui/form-control'
import { InputGroup } from '@chakra-ui/input'
import { InputRightElement } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)


    const submitHandler = () => { };

    return (
        <VStack spacing='5px'>

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
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
             onClick={submitHandler} >
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
