import React, { ChangeEvent } from "react";
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

interface State {
  checkedNames: string[];
}

export default class Sidebar extends React.Component <object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      checkedNames: [],
    };
  }

  handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { checkedNames } = this.state;
    const { name, checked } = e.target;

    if (checked && !checkedNames.includes(name)) {
      this.setState({ checkedNames: [...checkedNames, name] });
    } else if (!checked) {
      this.setState({ checkedNames: checkedNames.filter((n) => n !== name) });
    }
  };

  showAlert = () => {
    const { checkedNames } = this.state;
    alert(`Checked: ${checkedNames.join(", ")}`);
  };

  render() {
    return (
      <Box >
        <Box maxW="32rem">
          <Heading mb={4} color="gray.700">React Pizza</Heading>
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
              onClick={this.showAlert}
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
        <Accordion defaultIndex={[0]} allowMultiple pt={10}>
          <AccordionItem borderColor="transparent">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="start" pl="1rem">
                <Checkbox colorScheme="red" onChange={this.handleCheck} name="Pizza enak">
                  Pizza enak
                </Checkbox>
                <Checkbox colorScheme="red" onChange={this.handleCheck} name="Pizza luar biasa">
                  Pizza luar biasa
                </Checkbox>
                <Checkbox colorScheme="red" onChange={this.handleCheck} name="Pizza sedap">
                  Pizza sedap
                </Checkbox>
                <Checkbox colorScheme="red" onChange={this.handleCheck} name="Pizza super">
                  Pizza super
                </Checkbox>
                <Checkbox colorScheme="red" onChange={this.handleCheck} name="Pizza dewa">
                  Pizza dewa
                </Checkbox>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderColor="transparent">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  }
}
