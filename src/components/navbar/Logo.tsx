import { primaryColor} from '@/const'
import { Text } from '@mantine/core'
import Link from 'next/link'


const Logo = () => {
  return (
    <Text component={Link} fz="h1" fw="bold" color={primaryColor} href='/'>Carent</Text>
  )
}

export default Logo