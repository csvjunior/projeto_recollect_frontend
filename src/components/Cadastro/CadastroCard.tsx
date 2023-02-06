import {
  Stack,
  Heading,
  Card,
  Center,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import React, { useState } from 'react';
import axios from 'axios';
import api from "../../services/api";
import {Company} from "../../model/company.type"
import "./style.css";
import { Link, Link as LinkRoute, Navigate } from "react-router-dom";



export function CadastroCard() {
  const [company, setCompany] = useState<Company>({
    companyName: '',
    site: '',
    responsibleName: '',
    responsiblePhone: 0,
    companyEmail: '',
    address: {
      street: '',
      zip: '',
      city: '',
      state: ''
    },
    phone: 0,
    typesOfMaterialYouRecycle: '',
    removeTheMaterialAtAnotherAddress: '',
    loginEmail: '',
    password: ''
  }); // Essa é uma função chamada "CadastroCard" que está sendo exportada.    
  // Dentro dessa função, está sendo usado o Hook "useState" do React para criar um estado para uma variável chamada "company". 
  // Essa variável é do tipo "Company", que é uma interface ou tipo customizado com vários campos. 
  // Todos os campos estão inicialmente vazios ou com o valor 0.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCompany({ ...company, [name]: value });
  } // Essa é uma função chamada "handleChange" que é usada para lidar com mudanças em um elemento de input ou textarea.   
  // Quando essa função é chamada (por exemplo, quando um usuário digita algo em um campo de formulário), 
  // ela pega o "name" e o "value" do elemento que foi alterado. 
  // Em seguida, usa a função "setCompany" para atualizar o estado "company" com o novo valor. 
  // Isso é feito com a sintaxe de propagação (...company) para manter os outros valores do objeto "company" 
  // e apenas atualizar o valor específico que precisa ser atualizado.

  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    company.address = { ...company.address, [name]: value}
    setCompany({...company})
  } // Essa é uma função semelhante chamada "handleChangeAddress"
  //  que também é usada para lidar com mudanças em um elemento de input ou textarea, mas dessa vez específico para o endereço.
  // Quando essa função é chamada, ele pega o "name" e o "value" do elemento que foi alterado. 
  // Em seguida, atualiza o objeto "address" dentro do objeto "company" com o novo valor. 
  // Isso é feito usando a sintaxe de propagação ({ ...company.address, [name]: value}) 
  // para manter os outros valores do objeto "address" e apenas atualizar o valor específico que precisa ser atualizado.
  // Por fim, ele usa a função "setCompany" para atualizar o estado "company" com o novo valor de "address" 
  // e isso é feito com a sintaxe de propagação (...company) para garantir que os outros valores do objeto "company" não sejam afetados.

  
  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    
    api.post<Company>('/companies', company)
      .then(response => {
        window.location.assign('/Dashboard');  
      })
      .catch(error => {
        console.log(error);
      });
   } // Essa é uma função chamada "handleSubmit" que é usada para lidar com o envio de um formulário. 
  // Ela é chamada quando o evento de envio é acionado (por exemplo, quando o usuário clica em um botão de "enviar").
  // A primeira coisa que essa função faz é chamar "event.preventDefault()", o que impede que o navegador faça uma ação padrão, 
  // como recarregar a página.  Em seguida, a função faz uma chamada à API com o método "post" passando a rota '/companies' 
  // e o objeto "company" como parâmetros. Se a chamada for bem-sucedida, a página é redirecionada
  //  para '/Dashboard' usando window.location.assign('/Dashboard');  Caso contrário, o erro é capturado e exibido no console.


  return (
    <Card
      className="novo-cadastro-card"
      backdropFilter="auto"
      backdropBlur="40px"
      ml="2%"
      mr="2%"
      border="1px solid white"
      borderStartRadius="20px"
      borderEndRadius="20px"
      variant="outline"
      backgroundColor='none'
    >

      <Heading className="titulo-novo-cadastro" fontSize={["3rem", '4rem']} mt="10" textAlign='center' color="white">
        Novo Cadastro
        <br /> <br />
      </Heading>

      <Center>
        <Flex>
          <Stack mt={["-5", '10']} className="coluna-nome-da-empresa" spacing={3} width="100%" color="white">
            <Input placeholder="Nome da empresa*" type="name" name='companyName' value={company.companyName} onChange={handleChange}/>
            <Input placeholder="Nome do responsável*" type="name" name='responsibleName' value={company.responsibleName} onChange={handleChange}/>
            <Input placeholder="E-mail da empresa*" type="name" name='companyEmail' value={company.companyEmail} onChange={handleChange}/>
            <Input placeholder="Telefone da empresa*" type="name" name='phone' value={company.phone} onChange={handleChange}/>
            <Input placeholder="Tipos de material que recicla?" name='typesOfMaterialYouRecycle' type="name" value={company.typesOfMaterialYouRecycle} onChange={handleChange}/>
            <Input placeholder="E-mail para login*" type="email" name='loginEmail' value={company.loginEmail} onChange={handleChange}/>
          </Stack>

          <Stack className="coluna-site-da-empresa" spacing={3} mt={["-5", '10']} width="100%">
            <Stack className="coluna-site-tel-endereco" spacing={3}>
              <Input placeholder="Site da empresa" type="name" name='site' value={company.site} onChange={handleChange}/>
              <Input placeholder="Telefone do responsável" type="name" name='responsiblePhone' value={company.responsiblePhone} onChange={handleChange}/>
              <Input placeholder="Endereço da empresa*" type="name" name='street' value={company.address.street} onChange={handleChangeAddress}/>
            </Stack>

            <Stack className="coluna-cep-cidade-estado" spacing={3}>
              <Flex flexDirection={['row', 'row']}>
                <Input placeholder="CEP*" type="name" name='zip' width={['100%', '33%']} value={company.address.zip} onChange={handleChangeAddress}/>
                <Input placeholder="Cidade*" type="name" name='city' width={['100%', '33%']} value={company.address.city} onChange={handleChangeAddress}/>
                <Input placeholder="Estado*" type="name" name='state' width={['100%', '33%']} value={company.address.state} onChange={handleChangeAddress}/>
              </Flex>
            </Stack>

            <Stack className="coluna-senha-repetir-senha" spacing={3}>
              <Input
                placeholder="Retira o material em outros endereços?"
                type="name"
                name='removeTheMaterialAtAnotherAddress'
                value={company.removeTheMaterialAtAnotherAddress} onChange={handleChange}
              />
              <Flex>
                <Input placeholder="Senha" type="password" width="50%" name='password' value={company.password} onChange={handleChange}/>
                <Input
                  placeholder="Repetir Senha"
                  type="password"
                  width="50%"
                  
                />
              </Flex>
            </Stack>

            <Stack className='stack-c' align='end' >
              <Button className="botao-cadastrar" colorScheme="green" color='black' bg="white" onClick={handleSubmit}>
                Cadastrar
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Card>
  );
};

