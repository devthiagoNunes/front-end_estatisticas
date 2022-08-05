import React, { useContext, useState } from "react"
import Multiselect from "multiselect-react-dropdown"

import { ContextGlobal } from "../../../contexts/GlobalContext/context"
import './style.css'

export default ({
  descriptionFilter, options, placeholder = 'Selecionar', action,
  singleSelect = false, showCheckbox = true, selectionLimit = null
}) => {

  const context = useContext(ContextGlobal)
  const [infor, setInfor] = useState(false)
  const directionFilters = descriptionFilter === 'Mês:' ? 'month' : ''

  return (
    <div>
      <p>
        {descriptionFilter}
        {descriptionFilter === 'Mês:' &&
          <button
            onMouseOver={() => setInfor(true)}
            onMouseOut={() => setInfor(false)}
          >?</button>
        }
        {infor && (
          <span>Ao selecionar 2 meses, os resultados serão baseados no intervalo entre.</span>
        )}
      </p>
      <Multiselect
        className={`filtros ${directionFilters}`}
        options={options}
        singleSelect={singleSelect}
        displayValue="Country"
        showCheckbox={showCheckbox}
        placeholder={placeholder}
        emptyRecordMsg='Carregando...'
        selectionLimit={selectionLimit}
        onSelect={(e) => context.dispatch({type:action, payload: e})}
        onRemove={(e) => context.dispatch({type:action, payload: e})}
      />
    </div>
  )
}