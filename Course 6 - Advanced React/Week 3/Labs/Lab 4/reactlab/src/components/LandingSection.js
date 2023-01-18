import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
           src="https://i.pravatar.cc/150?img=7"
          size="2x1"
          name="Christiaan"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          Hello I am Christiaan
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="3x1" noOfLines={1}>
         A Frontend Developer
        </Heading>
        <Heading as="h1" size="3x1" noOfLines={1}>
         This is a portfolio
        </Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
