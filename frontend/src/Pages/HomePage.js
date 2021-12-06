import { Text } from '@chakra-ui/layout'
import { Box, Container } from '@chakra-ui/react'
import { TabPanel } from '@chakra-ui/tabs'
import { Tab } from '@chakra-ui/tabs'
import { TabPanels } from '@chakra-ui/tabs'
import { TabList } from '@chakra-ui/tabs'
import { Tabs } from '@chakra-ui/tabs'
import React from 'react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const HomePage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="10px"
                borderWidth="1px"
            >
                <Text
                    fontSize="4xl"
                    fontFamily="Work sans"
                    color="black"
                >My Chat App</Text>
            </Box>

            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="10px"
                borderWidth="1px"
            >

                <Tabs variant='soft-rounded' >
                    <TabList mb="1em">
                        <Tab w="50%">Login</Tab>
                        <Tab w="50%">Sign up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>


            </Box>
        </Container>
    )
}

export default HomePage
