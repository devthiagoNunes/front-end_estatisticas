import React, { useContext } from "react"
import Multiselect from "multiselect-react-dropdown"

import { ContextGlobal } from "../../../contexts/GlobalContext/context"
import './style.css'

export default ({
  descriptionFilter, options, placeholder = 'Selecionar', action,
  singleSelect = false, showCheckbox = true, selectionLimit = null
}) => {

  const context = useContext(ContextGlobal)

  return (
    <div>
      <p>{descriptionFilter}</p>
      <Multiselect
        className='filtros'
        options={options}
        singleSelect={singleSelect}
        displayValue="Country"
        showCheckbox={showCheckbox}
        placeholder={placeholder}
        selectionLimit={selectionLimit}
        onSelect={(e) => context.dispatch({type:action, payload: e})}
        onRemove={(e) => context.dispatch({type:action, payload: e})}
      />
    </div>
  )
}