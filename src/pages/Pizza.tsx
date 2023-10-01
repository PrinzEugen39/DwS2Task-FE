import { QuestionOutlineIcon, EditIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
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
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PizzaDetails from "./PizzaDetails";

interface Food {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

// const foods: Food[] = [
//   {
//     name: "Pizza Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     picture: "/focaccia.jpg",
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     picture: "/margherita.jpg",
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     picture: "/spinaci.jpg",
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     picture: "/funghi.jpg",
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     picture: "/salamino.jpg",
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     picture: "/prosciutto.jpg",
//   },
// ];

export default function Pizza() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getFood() {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:9000/foods");
      const data = await res.json();

      console.log(data);
      setFoods(data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setIsLoading(false), 100);
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
 
  return (
    <SimpleGrid spacing={5} minChildWidth="290px">
      {foods.map((food) => {
        return (
          <Card
            key={food.id}
            borderTop="8px"
            borderColor="red.400"
            bg="white"
            boxShadow="md"
          >
            <CardHeader>
              <Box height="60px" overflow="hidden" mb={-5}>
                <Skeleton isLoaded={!isLoading}>
                  <Heading as="h3" size="sm" textAlign={"center"}>
                    {food.name}
                  </Heading>
                </Skeleton>
              </Box>
            </CardHeader>
            <CardBody color="gray.500">
              <Skeleton isLoaded={!isLoading}>
                <Image
                  ms={2}
                  fit="cover"
                  src={food.imageUrl}
                  borderRadius="md"
                  boxSize="240px"
                  alt="gambar"
                  mb={10}
                  boxShadow="md"
                />
              </Skeleton>
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
                isLoaded={!isLoading}
              >
                <Text>{food.description}</Text>
              </SkeletonText>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter my={-2}>
              <HStack>
                <NavLink to={`details/${food.id}`}>
                  <Button
                    variant="ghost"
                    leftIcon={<QuestionOutlineIcon />}
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    Details
                    <PizzaDetails
                      isOpen={isOpen}
                      onClose={onClose}
                    />
                  </Button>
                </NavLink>
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
