import { Box, Image, Text } from "@chakra-ui/react"
import HeroFoot from "../components/HeroFoot"
import HeroNav from "../components/HeroNav"

export default function Homepage() {
  return (
    <>
    <HeroNav />
    <Box height="68vh">
        <Image src="/focaccia.jpg"/>
        <Text>HOMEPAGE </Text>
    </Box>
    <HeroFoot />
    </>
  )
}
