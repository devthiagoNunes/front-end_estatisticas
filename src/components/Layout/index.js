import React, { useContext } from "react";

import { ContextGlobal } from '../../contexts/GlobalContext/context'
import RenderDatas from "../../pages/dadosEmpresas";

export default () => { 
  const context = useContext(ContextGlobal);
  return (
    <div>
      {context.state.empresasAbertas == true && (
        <RenderDatas
          tipo={"Abertas"}
        />
      )}
      {context.state.empresasAbertas !== true && (
        <RenderDatas
          tipo={"Ativas"}
        />
      )}
    </div>
  );
};
