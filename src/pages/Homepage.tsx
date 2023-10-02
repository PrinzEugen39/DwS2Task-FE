import { Box, Image, Text } from "@chakra-ui/react"
import HeroNav from "../features/Homepage/HeroNav"
import HeroFoot from "../features/Homepage/HeroFoot"

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
