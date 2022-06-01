import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react"
import { FiHome } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <div>
      <Flex
        w={['100%', '100%', '10%', '15%', '15%']}
        flexDir='column'
        alignItems='center'
        backgroundColor='#363740'
        color='#fff'
      >
        <Flex
          flexDir='column'
          h={[null, null, '100vh']}
          justifyContent='space-between'
        >
          <Flex flexDir='column' as='nav'>
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={['4xl', '4xl', '2xl', '3xl', '4xl']}
              alignSelf='center'
              letterSpacing='tight'
            >
              Herzina
            </Heading>
            <Flex
              flexDir={['row', 'row', 'column', 'column', 'column']}
              align={['center', 'center', 'center', 'flex-start', 'flex-start']}
              wrap={['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap']}
              justifyContent='center'
            >
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                  <Icon as={FiHome} fontSize='2xl' className='active-icon' />
                </Link>
                <Link
                  _hover={{ textDecor: 'none' }}
                  display={['flex', 'flex', 'none', 'flex', 'flex']}
                >
                  <Text className='active'>Home</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Sidebar