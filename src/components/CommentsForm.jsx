import React from 'react';
import {
  chakra,
  Box,
  Input,
  Form,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function CommentsForm() {
  return (
    <Box>
      <form>
        <FormControl>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input name="name" placeholder="Name" isRequired />
        </FormControl>
        <FormControl my={2}>
          <FormLabel htmlFor="Comment">Comment</FormLabel>
          <Textarea isRequired placeholder="Leave a comment here..." />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
