import {
  Input,
  Box,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useFoods } from "../features/Food/useFoods";
import { useState } from "react";

export default function Sidebar() {
  const { foods } = useFoods();
  const [checked, setChecked] = useState<string[]>([]);

  function handleClick() {
    console.log(checked);
    return alert(`Cheked: ${checked}`);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setChecked((prev) => {
      if (prev.includes(value)) {
        // If the checkbox is already checked, uncheck it
        return prev.filter((item) => item !== value);
      } else {
        // If the checkbox is not checked, check it
        return [...prev, value];
      }
    });
  }

  return (
    <Box>
      <Box maxW="32rem">
        <Heading mb={4} color="gray.700">
          Da Foods
        </Heading>
      </Box>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          bg="white"
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            onClick={handleClick}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      <Accordion defaultIndex={[0]} allowMultiple pt={10}>
        <AccordionItem borderColor="transparent">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="start" pl="1rem">
              {[...new Set(foods.map((food) => food.categories[0]))].map(
                (category) => (
                  <Checkbox
                    colorScheme="red"
                    key={category}
                    name={category}
                    value={category}
                    isChecked={checked.includes(category)}
                    onChange={handleChange}
                  >
                    {category}
                  </Checkbox>
                )
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="transparent">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tag
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
