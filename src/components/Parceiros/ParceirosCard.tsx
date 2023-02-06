import {
  Text,
  Stack,
  Heading,
  Image,
  CardBody,
  Card,
  Flex,
  Center,
  CardFooter,
  Button
} from "@chakra-ui/react";

import { Link as LinkRoute } from "react-router-dom";
import './style.css';
import parceiros01 from "../../assets/imgs/parceiros01.png";
import { CompaniesResponse } from "../../model/company.type";

export function ParceirosCard(props: CompaniesResponse) {
  return (
    <Card className="parceiros-card" align='center' backdropFilter='auto' backdropBlur='40px' backgroundColor='none' ml='2%' mr='2%' border='1px solid white' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
      <CardBody >

        <Stack spacing='3' textAlign='center'>
          <Heading fontSize='4rem' color='white'>Parceiros</Heading>
          <Center>
            <Text className="texto-parceiros-card" fontSize='1rem' color={['green','white']} >
              A Recollect conta com inúmeras empresas parceiras que vão te apoiar no processo de descarte e reciclagem do seu lixo. <br />
              Abaixo, você poderá ver uma lista completa dos nossos parceiros, com detalhes sobre contato, materiais que eles reciclam e endereço. <br />
              Caso queria buscar as empresas por proximidade do seu endereço, <LinkRoute className="linkroute" to="/QueroReciclar">clique aqui</LinkRoute>.<br />
            </Text>
          </Center>

        </Stack>
        {props?.companies?.map((company, index) => {
          // Este é um exemplo de como usar o método "map" em JavaScript para percorrer um array de objetos "companies". 
          // "props?.companies" está sendo usado para acessar a propriedade "companies" do objeto "props", 
          // que é um objeto passado para o componente atual. O método "map" é usado para percorrer cada item do array "companies" e, 
          // para cada item, é criado um novo elemento JSX (JavaScript XML) com a função de flecha (=>). 
          // O primeiro argumento é a variável "company", que representa cada item do array e o segundo é index, é o indice do elemento.
          return (
            <Stack key={index}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                backdropFilter='auto' 
                backdropBlur='40px' 
                backgroundColor='none'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', md: '400px' }}
                  src={parceiros01}
                  alt=''
                />

                <Stack>
                  <CardBody className="texto-descritivo-empresa" >
                    <Heading color='white' mb='4'>{company.companyName}</Heading>

                    <Text py='2' color='white'>
                      {company.address.street} <br />
                      {company.address.city} - 
                      {company.address.state} -
                      {company.address.zip} <br /> <br/>
                      <strong>Materiais:</strong> {company.typesOfMaterialYouRecycle} <br/>
                      <strong>Retira o material em outro endereço: </strong> {company.removeTheMaterialAtAnotherAddress}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Stack>
          )
        })
        }
        <Stack >
          <Button className="botao-cadastre-sua-empresa" colorScheme='green' color='black' bg='white'>
            <LinkRoute to="/Cadastro">Cadastre sua Empresa</LinkRoute>
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}