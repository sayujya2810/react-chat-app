import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { InputGroup } from '@chakra-ui/input'
import { InputRightElement } from '@chakra-ui/input'
import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { FormControl } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Signup = () => {



    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [password, setPassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)

    const postDetails =(pics) => { };

    const submitHandler = () => { };

    return (
        <VStack spacing='5px'>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                ></Input>
            </FormControl>
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
            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>

                    <Input
                    type={show ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
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


            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />

            </FormControl>

            <Button
             colorScheme="blue"
             width="100%"
             style={{marginTop: 15}}
             onClick={submitHandler} >
                Sign Up
            </Button>


        </VStack>
    )
}

export default Signup
