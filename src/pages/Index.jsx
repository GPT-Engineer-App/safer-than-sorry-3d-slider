import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FaCalendarAlt, FaPencilAlt, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  // Placeholder for the 3D slider component
  // You would need to implement this or use a library that supports 3D effects
  const Slider3D = ({ children }) => (
    <Flex align="center" justify="center" h="300px">
      {children}
    </Flex>
  );

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my="8" textAlign="center">
        Safer Than Sorry
      </Heading>

      <Tabs isFitted variant="enclosed" align="center">
        <TabList mb="1em">
          <Tab>
            <FaQuoteLeft /> Get a Quote
          </Tab>
          <Tab>
            <FaPencilAlt /> Self Apply
          </Tab>
          <Tab>
            <FaCalendarAlt /> Schedule Appointment
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Slider3D>
              <Stack spacing={3}>
                <Heading as="h2" size="lg">
                  Life Insurance Quote Tool
                </Heading>
                <Text>Implement your life insurance tool kit here.</Text>
                {/* You would need to add form inputs and logic to calculate the quote based on gender, height, and weight */}
              </Stack>
            </Slider3D>
          </TabPanel>

          <TabPanel>
            <Slider3D>
              <Text>Self Apply page content goes here.</Text>
              {/* You will edit this content later */}
            </Slider3D>
          </TabPanel>

          <TabPanel>
            <Slider3D>
              <Text>Implement your calendar here.</Text>
              {/* You would need to add a calendar component or build it from scratch */}
            </Slider3D>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
