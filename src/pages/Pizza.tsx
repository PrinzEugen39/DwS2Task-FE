import { Component } from "react";
import { QuestionOutlineIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";

interface Food {
  picture: string;
  name: string;
  ingredients: string;
}

const foods: Food[] = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    picture: "/focaccia.jpg",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    picture: "/margherita.jpg",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    picture: "/spinaci.jpg",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    picture: "/funghi.jpg",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    picture: "/salamino.jpg",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    picture: "/prosciutto.jpg",
  },
];

export default class Pizza extends Component {
  render() {
    return (
      <SimpleGrid spacing={5} minChildWidth="290px">
        {foods.map((food, index) => {
          return (
            <Card key={index} borderTop="8px" borderColor="red.400" bg="white" boxShadow='md'>
              <CardHeader>
                <Box>
                  <Heading as="h3" size="sm">
                    {food.name}
                  </Heading>
                  <Text>by me</Text>
                </Box>
              </CardHeader>
              <CardBody color="gray.500" mt={-3}>
                <Image
                  src={food.picture}
                  borderRadius="md"
                  objectFit="cover"
                  alt="gambar"
                  mb={5}
                  boxShadow='md'
                />
                <Text>{food.ingredients}</Text>
              </CardBody>

              <Divider borderColor="gray.200" />

              <CardFooter my={-2}>
                <HStack>
                  <Button variant="ghost" leftIcon={<QuestionOutlineIcon />}>
                    Details
                  </Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Edit
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    );
  }
}
