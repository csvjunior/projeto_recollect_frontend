import { Header } from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import logo from "../assets/imgs/morro-2.png";
import { ParceirosCard } from "../components/Parceiros/ParceirosCard";
import api from "../services/api";
import { CompaniesResponse } from "../model/company.type";
import { useState } from "react";
import { useEffect } from "react";

function Parceiros() {

  const [companyList, setCompanyList] = useState<CompaniesResponse>() // Aqui está sendo usado o Hook "useState" do React para criar 
  // um estado para uma variável chamada "companyList". Essa variável é do tipo "CompaniesResponse", que é uma interface ou tipo customizado.
  // Esse estado é utilizado para armazenar uma lista de empresas retornadas pela API, e essa lista pode ser manipulada e atualizada através 
  // das funções "setCompanyList".  Essa estrutura permite que a aplicação mantenha uma lista de empresas atualizada e disponível para 
  // utilização em diferentes componentes.

  async function getCompanies() {
    const response = await api.get<CompaniesResponse>("/companies");
    return setCompanyList(response.data)
   } // Esta é uma função assíncrona chamada "getCompanies". Ela usa a biblioteca "api" para fazer uma chamada GET à rota "/companies", 
  // que espera receber uma resposta do tipo "CompaniesResponse". A resposta é armazenada na variável "response" e, 
  // em seguida, usada para definir a lista de empresas com "setCompanyList (response.data)".

  useEffect(() => {
    getCompanies();
   }, []) // Este é um exemplo de uso do Hook "useEffect" do React. 
  // Ele é usado para garantir que a função "getCompanies" seja chamada assim que o componente for renderizado na tela. 
  // O segundo argumento, [], indica que a função deve ser executada apenas uma vez, quando o componente for montado. 
  // Dessa forma, sempre que o componente é renderizado, a função "getCompanies" será chamada e a lista de empresas será atualizada.

  return (
    <>
      <Box backgroundSize='cover' bgImage={logo} height="100%">
        <Header />
        <ParceirosCard {...companyList} />
      </Box>
    </>
  );
}
export default Parceiros;
