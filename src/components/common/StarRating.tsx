import React from "react";
import { Flex } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface Props {
  rate: number;
}

const StarRating: React.FC<Props> = ({ rate }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Flex>
      {stars.slice(0, rate).map((_, index) => (
        <FaStar key={index} />
      ))}
      {stars.slice(rate, 5).map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </Flex>
  );
};

export default StarRating;
