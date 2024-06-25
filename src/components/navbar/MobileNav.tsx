"use client";
import { Box, Burger, Button, Center, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import AuthButtons from './AuthButtons';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const MobileNav = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
     <Drawer size="md" opened={opened} onClose={close} title={<Logo />} transitionProps={{
        transition:"slide-right",
        duration:1000
     }}>
        {/* Drawer content */}
        <AuthButtons />
        <Center hiddenFrom='sm' pos="fixed" bottom={0} w='90%' py={8} >
            <ThemeSwitcher />
        </Center>
      </Drawer>
      <Burger opened={opened} onClick={open}  />
    </>
  )
}

export default MobileNav