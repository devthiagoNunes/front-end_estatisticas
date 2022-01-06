import axios from "axios";
import React, { useEffect, useState } from "react";

import RenderDatas from "../../pages/dadosEmpresas";
import API_GET_DATAS from "../../services/pinot";
import "./layout.css";
import "./styleGlobal.css";

export default () => {
  const [stateInitial, setStateInitial] = useState(true);
  const alterState = (boolean) => setStateInitial(boolean);

  useEffect(() => {
    const getSetores = async () => {
      fetch('http://localhost:3333/all_municipios ')
      .then(res => {
        console.log(res.json())
      })
      .catch(err => console.log(err))
    }
    getSetores()
  }, [])

  const empresasAbertas = [
    {
      classificacao: "Porte",
      empresas: [
        "Microempresa\nIndividual",
        "Microempresa",
        "Pequeno Porte",
        "Outras\nEmpresas",
      ],
      quantidade: [26093, 7826, 1205, 681],
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
      quantidade: [16523, 14798, 2353, 1846, 285],
    },
    {
      classificacao: "Natureza",
      empresas: [
        "EI",
        "LTDA",
        "Eireli",
        "S/A",
        "Cooperativa",
        "Consorcio",
        "Empresa Publica",
      ],
      quantidade: [29973, 4020, 1563, 211, 23, 14, 1],
    },
    {
      classificacao: "Mes",
      tipo: [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ",
      ],
      quantidade: [
        4948, 4401, 4371, 3936, 4706, 4505, 4805, 4113, 4053, 3956, 4032, 4150,
      ],
    },
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
