import React from "react"
import './style.css'

export default () => {
  
  return(
      <div className="content" id="content-filtros">
        <div className="all-filtros">
          <div className="header-filters">
            <p className="txt-filtros">Filtros:</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" className="close-filters"
            onClick={() => {
              document.getElementById('content-filtros').style.display = 'none'
            }}/></svg>
          </div>  
          <div className="secao-topo">
            <div>
              <p>Ano de Abertura:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
              </select>
            </div>
            <div>
              <p>Porte da Empresa:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>Microempresa</option>
                <option>Microempresa Individual</option>
                <option>Pequeno Porte</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <p>Setor de Atuação:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>Agropecuária</option>
                <option>Comércio</option>
                <option>Construção</option>
                <option>Industria</option>
                <option>Serviços</option>
                <option>Ornismos Inter.</option>
              </select>
            </div>
            <div>
              <p>Municipio:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>São Luis</option>
                <option>Açailândia</option>
                <option>Arari</option>
                <option>Itapecuru Mirim</option>
              </select>
            </div>
          </div>
          <div className="secao-bottom">
            <div>
              <p>Seção de Atividade:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>Administração Pública, Defesa e Seguridade Social</option>
                <option>Comércio</option>
                <option>Construção</option>
                <option>Educação</option>
              </select>
            </div>
            <div>
              <p>Atividade:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
              </select>
            </div>
            <div>
              <p>Natureza:</p>
              <select>
                <option defaultValue={"Selecionar"}>Selecionar</option>
                <option>Abate de Aves</option>
                <option>Abate de Pequenos Animais</option>
                <option>Agências de Notícias</option>
                <option>Agências de Publicidade</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  )
}