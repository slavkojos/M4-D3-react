import { chakra, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import CommentItem from './CommentItem';
import CommentsForm from './CommentsForm';
import React, { useState, useEffect } from 'react';

const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTIxMjg5YzI2ZjAwMTU3ZjljMjIiLCJpYXQiOjE2MTYxNTkzMjEsImV4cCI6MTYxNzM2ODkyMX0.yycemhDdGvZmUnZJG5XvODHnYE6r8qVICvGVeMacRtQ';
const url = 'https://striveschool-api.herokuapp.com/api/comments/';
export default function CommentsBox(props) {
  const [comments, updateComments] = useState([]);
  useEffect(async () => {
    const response = await fetch(url + props.id, {
      headers: { Authorization: auth },
    });
    const data = await response.json();
    updateComments(data);
  }, []);

  console.log(comments);

  return (
    <Box>
      {comments.map(comment => {
        return (
          <CommentItem
            key={comment._id}
            id={comment.elementId}
            author={comment.author}
            rate={comment.rate}
            comment={comment.comment}
          />
        );
      })}

      <CommentsForm id={props.id} />
    </Box>
  );
}
