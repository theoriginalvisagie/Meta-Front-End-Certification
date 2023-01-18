import { Heading, HStack, Image, Link, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    
  return (
    <Box bg="white" borderRadius="10" maxW="sm"padding="5">
    <Image
      objectFit='cover'
      borderRadius='10px'
      src={imageSrc}
      alt={title}
      />
      <br />
      <Heading as="b" color='black' fontSize="md">{title}</Heading>
      <br />
      <Text as="sub" color="#767676">{description}</Text>
      <br />
      <Link isExternal color="black">
        <Heading as="b" color='black' fontSize="sm">See more <FontAwesomeIcon color="black" icon={faArrowRight} /></Heading>
      </Link>
    <h1>

        </h1>
    </Box>
    )
};

export default Card;
