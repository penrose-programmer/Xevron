import { Link } from '@tanstack/react-router'
import { Flex, Text, Button, Spacer, Icon, IconButton } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { PiPlaceholderBold } from 'react-icons/pi'

export default function Header() {
  return (
    <Flex m="4" paddingInline="8" gap="4" fontSize="xl" align="center">
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
          <a href="https://getwaitlist.com/waitlist/30231" target="_blank">
            Sign In
          </a>
        </Button>
      </Link>
      <a href="https://github.com/penrose-programmer/xevron" target="_blank">
        <IconButton aria-label="github" variant="subtle" size="lg">
          <FaGithub />
        </IconButton>
      </a>
    </Flex>
  )
}
