import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Pizza from "./Pizza"

import { Grid, GridItem } from "@chakra-ui/react";

export default function PizzaLayout() {
  return (
    <Grid templateColumns="repeat(9,1fr)" bg="orange.100">
    <GridItem
      as="aside"
      colSpan={{ base: 9, md: 4, xl: 2 }}
      bg="whatsapp.50"
      borderLeft="12px solid"
      borderColor="whatsapp.500"
      minHeight={{ lg: "100vh" }}
      p={{ base: "16px", lg: "30px" }}
    >
      <Sidebar />
    </GridItem>
    <GridItem
      as="main"
      colSpan={{ base: 9, md: 5, xl: 7 }}
      minHeight="100vh"
      p="2rem"
    >
      <Navbar />
      <Pizza />
    </GridItem>
  </Grid>
  )
}
