import { createFileRoute } from '@tanstack/react-router'
import { Flex, Button, IconButton } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { FaGithub } from 'react-icons/fa'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <Flex flexDir="column" align="center" justify="top" height="100vh">
      <Flex flexDir="row" fontWeight="bold" fontSize="6xl" gap="4" margin="4">
        Connect information with
        <Flex
          backgroundGradient="linear-gradient(to right, #38b2ac, #4299e1, #9f7aea)"
          backgroundClip="text"
        >
          Precision
        </Flex>
      </Flex>

      <Link to="/">
        <Button colorPalette="purple" size="2xl" fontFamily="mono">
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
