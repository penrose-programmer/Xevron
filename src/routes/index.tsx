import { createFileRoute } from '@tanstack/react-router'
import { Flex, Button, IconButton } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <Flex w="full" align="center" direction="column" height="100vh">
      <Flex direction="column" align="center" marginBlock="400px">
        <Flex
          direction="row"
          fontWeight="bold"
          fontSize="6xl"
          gap="4"
          margin="4"
        >
          Connect information with
          <Flex
            backgroundGradient="linear-gradient(to right, #38b2ac, #4299e1, #9f7aea)"
            backgroundClip="text"
          >
            Precision
          </Flex>
        </Flex>

        <Flex direction="row" gap="4" margin="4">
          <Button fontFamily="mono" colorPalette="purple" size="2xl">
            <a href="https://getwaitlist.com/waitlist/30231" target="_blank">
              Join the Waitlist
            </a>
          </Button>
          <a
            href="https://github.com/penrose-programmer/xevron"
            target="_blank"
          >
            <IconButton aria-label="github" variant="subtle" size="2xl">
              <FaGithub />
            </IconButton>
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}
