import { Badge } from '@chakra-ui/react';

export default function MyBadge(props) {
  return <Badge colorScheme={props.color}>{props.name}</Badge>;
}
