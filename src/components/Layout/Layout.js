import React, { useEffect, useState } from "react";

import RenderDatas from "../../pages/dadosEmpresas";
import { getAbertasPorte , getAbertasSetor } from "../../services/pinot";
import {getAbertasMes } from '../../services/graficoMes'
import "./layout.css";
import "./styleGlobal.css";

export default () => { 
  const [stateInitial, setStateInitial] = useState(true);
  const alterState = (boolean) => setStateInitial(boolean);

  const [dataPorte, setDataPorte] = useState([]);
  const [porte, setPorte] = useState({
    classificacao: "Porte",
    empresas: [], //TODO: classe | label
    quantidade: [] //TODO: valores | values
  });

  const [dataSetor, setDataSetor] = useState([])
  const [setor, setSetor] = useState({
    classificacao: "Setor",
    empresas: [], //TODO: classe | label
    quantidade: [] //TODO: valores | values
  });

  const [dataNatureza, setDataNatureza] = useState([])
  const [natureza, setNatureza] = useState({
    classificacao: "Natureza",
    empresas: [], //TODO: classe | label
    quantidade: [] //TODO: valores | values
  });

  const [abertasMes, setAbertasMes] = useState(
    {
      classificacao: "Mes",
      tipo: [],
      quantidade: [],
    },
  )

  useEffect(() => {
    const fetchPorte = async () => {
      var response = await getAbertasPorte();
      setDataPorte(response);
    }
    fetchPorte()
  }, []);

  useEffect(() => {
    if(dataPorte !== undefined){
      const obj = {classificacao: "Porte", empresas: [], quantidade: []}
      dataPorte.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setPorte(obj);
    }  
  }, [dataPorte]);

  // --------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchSetor = async () => {
      var response = await getAbertasSetor();
      setDataSetor(response);
    }
    fetchSetor()
  }, []);

  useEffect(() => {
    if(dataSetor !== undefined){
      const obj = {classificacao: "Setor", empresas: [], quantidade: []}
      dataSetor.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setSetor(obj);
    }  
  }, [dataSetor]);

   // --------------------------------------------------------------------------------------
   useEffect(() => {
    const fetchNatureza = async () => {
      var response = await getAbertasSetor();
      setDataNatureza(response);
    }
    fetchNatureza()
  }, []);

  useEffect(() => {
    if(dataNatureza !== undefined){
      const obj = {classificacao: "Natureza", empresas: [], quantidade: []}
      dataNatureza.forEach(element => {
        obj.empresas.push(element[0]);
        obj.quantidade.push(element[1]);
      });
      setNatureza(obj);
    }  
  }, [dataNatureza]);

  useEffect(() => {
    var newAbertasMes = {
      classificacao: "Mes",
      tipo: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
      quantidade: [],
    }
    var fetchAbertasMes = async () => {
      for (let index = 1; index < 13; index++)
        newAbertasMes.quantidade.push(await getAbertasMes(2021, String(index).padStart(2, "0"), String(index).padStart(2, "0"), 31));
      setAbertasMes(newAbertasMes);
    }
    fetchAbertasMes();
    
  }, []);

  const empresasAbertas = [
    porte,
    setor,
    natureza,
    abertasMes,
  ];

  const empresasAtivas = [
    {
      classificacao: "Porte",
      empresas: [
        "Microempresa\nIndividual",
        "Microempresa",
        "Pequeno\nPorte",
        "Outras\nEmpresas",
      ],
      quantidade: [157185, 138048, 14022, 37240],
    },
    {
      classificacao: "Setor",
      empresas: [
        "Comércio",
        "Serviços",
        "Industria",
        "Construção",
        "Agropecuária",
      ],
      quantidade: [184056, 115875, 23868, 19653, 3043],
    },
    {
      classificacao: "Natureza",
      empresas: [
        "EI",
        "LTDA",
        "Eireli",
        "S/A",
        "Cooperativa",
        "Empresa Publica",
        "Mista",
        "Consorcio",
        "Autarquia Federal",
        "Sociedadess",
        "Associação Privada",
        "Orgão Publico Poder Executivo",
        "Estabelecimento de Sociedade\nEstrangeira",
        "Entidade Sindical",
      ],
      quantidade: [
        257803, 64890, 19095, 3453, 884, 270, 248, 58, 49, 31, 11, 1, 1, 1,
      ],
    },
    {
      tipo: [
        "Comércio",
        "Alojamento e Alimentação",
        "Industrias de Transformação",
        "Construção",
        "Outras Atividades de  Serviços",
        "Atividades Profissionais,\nCientificas e Tecnicas",
        "Atividades Administrativas\ne Serviços Complementares",
        "Transporte, Armazenagem e Correio",
        "Edcação",
        "Saude Humana e Serviços Sociais",
        "Informação e Comunicaçao",
        "Agricultura, Pecuaria, Produção\nFlorestal, Pesca e Aquicultura",
        "Artes, Cultura, Esporte e Recepção",
        "Atividades Financeiras de\nSeguros e Relacionamentos",
        "Atividades Imobiliarias",
        "Agua, Esgoto, Atividades de\nGestão de Residuos e Descontaminação",
        "Serviços Domesticos",
        "Indusrias Extrativas",
        "Eletrecidade e Gas",
        "Administração Publica, Defesa\ne Seguridade Social",
      ],
      quantidade: [
        184056, 24536, 23164, 19653, 18303, 16250, 14514, 12160, 8568, 4340,
        5035, 3043, 2936, 2542, 2191, 861, 616, 451, 257, 23,
      ],
    },
  ];

  return (
    <div>
      {stateInitial == true && (
        <RenderDatas
          tipo={"Abertas"}
          setState={alterState}
          data={empresasAbertas}
        />
      )}
      {stateInitial != true && (
        <RenderDatas
          tipo={"Ativas"}
          setState={alterState}
          data={empresasAtivas}
        />
      )}
    </div>
  );
};
