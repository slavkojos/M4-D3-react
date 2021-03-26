import React from 'react';
import { chakra, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import MyBadge from './MyBadge';
import ProductDetail from './ProductDetail';

const Ma = props => {
  return (
    <Flex
      bg="gray.200"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      h={'500px'}
    >
      <Box
        maxW="xs"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2} h={'200px'}>
          <chakra.h1
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="xl"
            noOfLines={2}
          >
            {props.name}
          </chakra.h1>
          <MyBadge color="blue" name={props.category} />
          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </chakra.p>
        </Box>

        <Image
          h={64}
          w="full"
          objectFit="fill"
          mt={2}
          src={props.img}
          alt={props.name}
          p={3}
          px={6}
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            ${props.price}
          </chakra.h1>
          <ProductDetail key={props.id} id={props.id} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Ma;
