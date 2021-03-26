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
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTYxNTkzMjEsImV4cCI6MTYxNzM2ODkyMX0.yycemhDdGvZmUnZJG5XvODHnYE6r8qVICvGVeMacRtQ';
const url = 'https://striveschool-api.herokuapp.com/api/comments/';

export default function CommentsForm(props) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  function handleComment(event) {
    setComment(event.target.value);
  }
  function handleRating(event) {
    setRating(event.target.value);
  }
  const submitForm = async event => {
    event.preventDefault();
    let myComment = {
      comment: comment,
      rate: rating,
      elementId: props.id,
    };
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth,
        },
        body: JSON.stringify(myComment),
      });
      if (response.ok) {
        alert('Event was created successfully');
      } else {
        console.log(response.body);
        alert('something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <form onSubmit={submitForm}>
        <FormControl my={2}>
          <FormLabel htmlFor="Comment">Comment</FormLabel>
          <Textarea
            id="comment-box"
            isRequired
            placeholder="Leave a comment here..."
            onChange={handleComment}
          />
        </FormControl>
        <Select
          id="rating"
          placeholder="Rating"
          isRequired
          onChange={handleRating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
