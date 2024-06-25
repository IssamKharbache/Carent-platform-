import { Box, Group } from "@mantine/core";
import classes from "./style.module.css";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <Box className={classes.header}>
      <Group justify="space-between" h="100%">
        <Logo />
        <Group>
          <Box visibleFrom="md">
              <AuthButtons />
          </Box>
          <Box visibleFrom="sm">
             <ThemeSwitcher />
          </Box>
          <Box hiddenFrom="md" >
            <MobileNav />
          </Box>
        </Group>
      </Group>
    </Box>
  );
};

export default Navbar;
