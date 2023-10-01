"use client";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function HeroNav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Image src="/logo.png" mt="0.32rem" />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            display={{ base: "none", md: "inline-flex" }}
          >
            Contact Us
          </Button>
          <Button
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
            LOGIN
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      <Link to="/">
        <Box
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          _hover={{
            cursor: "pointer",
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          Home
        </Box>
      </Link>
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Box
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                cursor: "pointer",
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              Our Menu
            </Box>
          </PopoverTrigger>
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <DesktopSubNav />
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = () => {
  return (
    <Stack>
      <Link to="/pizza">
        <Box
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
          <Stack direction={"row"} align={"center"}>
            <Box>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
              >
                Cakes and Chocolate
              </Text>
              <Text fontSize={"sm"}>Also hotdogs</Text>
            </Box>
            <Flex
              transition={"all .3s ease"}
              transform={"translateX(-10px)"}
              opacity={0}
              _groupHover={{
                opacity: "100%",
                transform: "translateX(0)",
              }}
              justify={"flex-end"}
              align={"center"}
              flex={1}
            >
              <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Box>
      </Link>
      <Link to="#">
        <Box
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
          <Stack direction={"row"} align={"center"}>
            <Box>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
              >
                Pizzas
              </Text>
              <Text fontSize={"sm"}>The Prinz's fast react pizza</Text>
            </Box>
            <Flex
              transition={"all .3s ease"}
              transform={"translateX(-10px)"}
              opacity={0}
              _groupHover={{
                opacity: "100%",
                transform: "translateX(0)",
              }}
              justify={"flex-end"}
              align={"center"}
              flex={1}
            >
              <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Box>
      </Link>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <MobileNavItem />
    </Stack>
  );
};

const MobileNavItem = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box
        mb={2}
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          Home
        </Text>
      </Box>
      <Stack spacing={4} onClick={onToggle}>
        <Box
          py={2}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Our Menu
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
              ml={2}
            />
          </Text>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Stack
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Box py={1}>Cakes and Chocolate</Box>
          </Stack>
          <Stack
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Box py={1}>Pizzas</Box>
          </Stack>
        </Collapse>
      </Stack>
      <Box
        mb={2}
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
          Contact Us
        </Button>
      </Box>
    </>
  );
};
