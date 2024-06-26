"use client";
import { primaryColor, primaryGradient } from '@/const';
import { Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';


const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width:991px)")
  return (
    <Group  grow={smallScreen ? true :false}>
      <Button  variant='outline' color={primaryColor}  component={Link} href="/login">Login</Button>
      <Button  color={primaryColor} component={Link} href="/sign-up">Signup</Button>
    </Group>
  )
}

export default AuthButtons;