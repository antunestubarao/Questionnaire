import { Box, Flex, Heading } from "@chakra-ui/react";
import "./Question.css";
import { GoSmiley } from "react-icons/go";
import { FiSmile } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { LuSmilePlus } from "react-icons/lu";

function Question() {
  return (
    <div>
      <div className="question-container">
        <h1>Pergunta 05/10</h1>
        <p>
          Qual Seu Nível de Satisfação ao Comprar na La Bordados e Cestaria
          Moderna
        </p>
      </div>

      <div className="question-cards">
        <div className="box-card">
          <Heading size="md"> Estou razoavelmente satisfeito</Heading>
          <GoSmiley size={150} color="#FFD700" />
        </div>
        <div className="box-card">
          <Heading size="md"> Estou bastante satisfeito!</Heading>
          <FiSmile size={150} color="#0000FF" />
        </div>
        <div className="box-card">
          <Heading size="md"> Estou extremamente satisfeito!</Heading>
          <LuSmilePlus size={150} color="#00FF00" />
        </div>
      </div>

      <div className="question-buttons">
        <FaAngleLeft color="cadetblue" size={30} />
        <Box
          as="button"
          borderRadius="md"
          bg="cadetblue"
          color="white"
          px={4}
          h={8}
          padding={"0 32px"}
        >
          Button
        </Box>
      </div>
    </div>
  );
}

export default Question;
