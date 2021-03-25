import Product from './Product';
import { Center, Square, Circle, SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import fantasy from '../json/fantasy.json';
import history from '../json/history.json';
import horror from '../json/horror.json';
import romance from '../json/romance.json';
import scifi from '../json/scifi.json';
import ProductDetail from './ProductDetail';

function populateBooks() {
  scifi.map(item => {
    return (
      <Product
        key={item.asin}
        name={item.title}
        img={item.img}
        price={item.price}
        category={item.category}
      />
    );
  });
}
export default function Main() {
  return (
    <Box bg="gray.200" w="100%" p={8}>
      <Center>
        <SimpleGrid columns={[2, null, 4]} spacingY="40px">
          {scifi.map(item => {
            return (
              <Box h={'500px'}>
                <Product
                  key={item.asin}
                  name={item.title}
                  img={item.img}
                  price={item.price}
                  category={item.category}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>
    </Box>
  );
}
