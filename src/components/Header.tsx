import { Link } from '@tanstack/react-router'
import { Flex, Text, Button, Spacer, Icon, IconButton } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { PiPlaceholderBold } from 'react-icons/pi'

export default function Header() {
  return (
    <Flex
      m="4"
      paddingInline="8"
      gap="4"
      fontSize="xl"
      align="center"
      flexDir="row"
    >
      <Link to="/">
        <Flex flexDir="row" align="center" gap="2">
          <Icon size="lg">
            <PiPlaceholderBold />
          </Icon>
          <Text fontWeight="bold" fontSize="2xl">
            Xevron
          </Text>
        </Flex>
      </Link>
      <Spacer />
      <Link to="/">
        <Button fontFamily="mono" colorPalette="purple">
          Join the Waitlist
        </Button>
      </Link>
      <a href="/">
        <IconButton variant="subtle" size="lg">
          <FaGithub />
        </IconButton>
      </a>
    </Flex>
  )
}
