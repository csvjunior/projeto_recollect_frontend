import {
  Input,
  Card,
  CardBody,
  Heading,
  Link,
  ButtonGroup,
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import  { redirect } from 'react-router-dom'
import { Link as LinkRoute } from "react-router-dom";
import api from "../../services/api";
import "./style.css";


interface LoginInfo{
  loginEmail: string,
  password: string
 } // "interface LoginInfo" é uma interface que define um tipo customizado para armazenar informações de login. 
// Ele tem dois campos: "loginEmail" e "password", ambos são do tipo string. 
// Isso significa que essa interface espera que esses campos contenham uma cadeia de caracteres (como um endereço de e-mail ou uma senha). 
// Essa interface pode ser usada para garantir que um objeto tenha esses campos específicos e tipos de dados.

async function Login(email: string, senha: string) {
  try{
  const response = await api.post<any>("/login", {loginEmail: email, password: senha });
  localStorage.setItem('token', response.data);
  window.location.assign('/Dashboard');  
  } catch(err){
    console.log(err)
  } 
 } // Esta é uma função chamada "Login" que é assíncrona e tem dois parâmetros, "email" e "senha". 
// A função faz uma chamada à API para o endpoint "/login" passando um objeto com os campos "loginEmail" e "password" 
// preenchidos com os valores dos parâmetros email e senha respectivamente. Se a chamada for bem-sucedida, 
// a função armazena o token de resposta na localStorage e redireciona para a página "/Dashboard" usando window.location.assign('/Dashboard').
// Caso contrário, o erro é capturado e exibido no console. A função utiliza o try-catch para controlar possíveis erros durante a chamada à API, 
// garantindo que o fluxo de execução da aplicação não seja afetado.


export function LoginCard() {
  const [email, setEmail] = useState<string>(''); 
  const [senha, setSenha] = useState<string>(''); 
  const  handleLogin = async () => {
    await Login(email, senha)
   }  // Aqui está sendo utilizado o Hook "useState" do React para criar dois estados, um para o "email" e outro para a "senha", 
  // ambos com valores iniciais vazios. É criada uma função handleLogin que é chamada quando o usuário clica em um botão de login, 
  // e essa função chama a função Login() passando os valores dos estados email e senha como parâmetros.
  // A função handleLogin é marcada como assíncrona para que possa aguardar o retorno da função Login() antes de continuar a execução.
  // Essa estrutura permite que o usuário insira seu email e senha no formulário de login e quando clicar no botão de login, 
  // essas informações serão enviadas para a função Login() para realizar a autenticação.

  return (
    <Card className="card_login"
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
      <CardBody border='white'>
        <Heading fontSize={['3rem', '4rem']} color="white">
          Login
          <br /> <br />
        </Heading>

        <Center>
          <Stack className="input-email-senha-logincard">
            <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <Input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            {/* "value" é usado para definir o valor atual do campo de entrada e é ligado ao estado "email" e "senha" criados anteriormente.
            "onChange" é usado para definir uma função que será chamada sempre que o valor do campo de entrada for alterado.
            A função setEmail e setSenha passadas como parâmetros para onChange, são responsáveis por atualizar o estado "email" 
            e "senha" com o novo valor do campo de entrada. Isso permite que o usuário digite seu email e senha e ao digitar, 
            essas informações são armazenadas no estado e posteriormente utilizadas na função de login. */}
          </Stack>
        </Center>

        <Center>
          <Stack className="entrar-cadastre-se-botoes">
            <ButtonGroup className="login_card_btn" mt='10'>
              <Button colorScheme="green" color='black' bg="white" onClick={handleLogin}>
              {/* "onClick" é usado para especificar uma função a ser chamada quando o botão for clicado, no caso handleLogin.
              A função handleLogin é chamada quando o usuário clica no botão, fazendo com que as informações de email e senha 
              digitadas sejam enviadas para a função de login, para realizar a autenticação. */}
                <Link>Entrar</Link>
              </Button>
              <Button colorScheme="green" color='black' bg="white">
                <LinkRoute to="/Cadastro">Cadastre-se</LinkRoute>
              </Button>
            </ButtonGroup>
          </Stack>
        </Center>
        <Stack className="link-esqueci-minha-senha" mt='6' mb='6'> 
          <Link
            as={LinkRoute}
            to="/EsqueciMinhaSenha"
            color="white"
          >
            Esqueci Minha Senha
          </Link>
        </Stack>
        <Center>

        </Center>

      </CardBody>
    </Card>
  );
}
