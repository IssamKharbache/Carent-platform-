import { primaryGradient } from '@/const'
import { Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Text component={Link} fz="h1" fw="bold" variant='gradient' gradient={primaryGradient} href='/'>Carent</Text>
  )
}

export default Logo