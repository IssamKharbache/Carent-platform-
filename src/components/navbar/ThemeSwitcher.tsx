"use client";
import { Center, SegmentedControl, useMantineColorScheme } from "@mantine/core";
import {IconMoon, IconSun} from "@tabler/icons-react"
const ThemeSwitcher = () => {
    const {colorScheme,setColorScheme} = useMantineColorScheme();
  return (
    <SegmentedControl
    value={colorScheme}
    onChange={(value)=>setColorScheme(value as any )}
      data={[
        {
          value: "light",
          label: <Center>
            <IconSun  size="1.5rem" stroke={1.5} />
           </Center>,
        },
        {
          value: "dark",
          label: <Center>
          <IconMoon size="1.5rem" stroke={1.5} />
         </Center>,
        },
      ]}
    />
  );
};

export default ThemeSwitcher;
