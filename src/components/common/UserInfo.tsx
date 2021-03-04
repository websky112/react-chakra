import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  name: string;
  photoUrl: string;
  title: string;
  city: string;
  country: string;
}

const UserInfo: React.FC<Props> = ({
  photoUrl,
  name,
  title,
  city,
  country,
}) => (
  <Flex align="center" flexDir="column">
    <img
      className="rounded-circle mb-2"
      src={photoUrl}
      width="105"
      height="105"
      alt={`${name}_avatar`}
    />
    <Box className="text-semi-bold">{name}</Box>
    <Box className="grey-text">{title}</Box>
    <Box className="grey-text">{`${city}, ${country}`}</Box>
  </Flex>
);

export default UserInfo;
