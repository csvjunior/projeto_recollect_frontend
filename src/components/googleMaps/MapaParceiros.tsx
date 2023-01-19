import {
  Text,
  CardFooter,
  Stack,
  Heading,
  Image,
  Button,
  CardBody,
  Card,
  Flex,
  Center,
} from "@chakra-ui/react";

import caixa from "../../assets/imgs/caixas.png";


export function MapaParceiros() {
  return (

    <Card backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody>
        <Flex>
          <Stack maxW="960px" w='50%' >
            <CardBody>
              <Heading size="md" fontSize="4rem" color="white">
                Olá nós somos a<br></br>Recollect
              </Heading>

              <Text py="2" fontSize="1rem" color='white'>
                A Recollect é uma empresa que tem como principal objetivo
                incentivar pessoas comuns a reciclar seu lixo doméstico.
                Acreditamos que o futuro do nosso planeta está nas mãos de cada um
                de nós e que pequenas ações, como a reciclagem, tem um enorme
                impacto no bem-estar do planeta. <br /> <br /> Nossa missão é te ajudar para que
                a ação de reciclar se torne mais fácil e faça parte da sua rotina. <br /> <br />
                Por meio da nossa plataforma de matchmaking, conectamos indivíduos
                com empresas, organizações, coletivos e cooperativas de
                reciclagem, incentivando a reciclagem de todos os tipos de
                materiais com o intuito de transformar nosso planeta em um lugar
                melhor.<br /> <br /> Não importa se você quer doar ou vender seu lixo, vamos te
                conectar com as empresas mais perto de você, para que você possa
                dar o destino correto ao seu lixo.<br /> <br /> Toda ação conta. Seja parte
                dessa jornada.
              </Text>
            </CardBody>
          </Stack>

          <Stack mt='10%' w='50%'>
            <Center>
              <Image src={caixa} w='50%' h='100%' />
            </Center>

            <Center>
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Entre em contato
                </Button>
              </CardFooter>
            </Center>

          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
}
