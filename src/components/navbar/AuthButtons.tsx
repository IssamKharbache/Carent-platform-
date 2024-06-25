"use client";
import { primaryColor, primaryGradient } from '@/const';
import { Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react'

const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width:991px)")
  return (
    <Group  grow={smallScreen ? true :false}>
      <Button  color={primaryColor} component={Link} href="/login">Login</Button>
      <Button variant="gradient" gradient={primaryGradient} component={Link} href="/sign-up">Signup</Button>
    </Group>
  )
}

export default AuthButtons;