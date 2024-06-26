import { primaryColor, primaryGradient } from "@/const";
import { Button, Container, Flex } from "@mantine/core";
import classes from "./searchEngine.module.css";
import SelectCountry from "../SelectCountry";
import SelectRegion from "../SelectRegion";
import SelectCarBrand from "../SelectCarBrand";
import SelectDate from "../SelectDate";

const SearchEngine = () => {
  return (
    <Container className={classes.container}>
      <Flex
        gap={{
          base: "sm",
          sm: "lg",
        }}
        justify="center"
        align={{
          base: "stretch",
          sm: "flex-end",
        }}
        direction={{
          base: "column",
          sm: "row",
        }}
      >
        <SelectCountry />
        <SelectRegion />
        <SelectCarBrand />
        <SelectDate label="Pickup date" />
        <SelectDate label="Return date" />
        <Button w={{
            base:"100%",
            sm:"10rem"
        }} variant="gradient" gradient={primaryGradient}>Search a car</Button>
      </Flex>
    </Container>
  );
};

export default SearchEngine;
