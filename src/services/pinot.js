import axios from 'axios'

export const getAbertas = async (classificacao, filtros) => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/getEmpresasAbertas', 
    data: {
      classificacao, filtros
    }
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getDataEmpresasAtivas = async (classificacao, filtros) => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/getEmpresasAtivas', 
    data: {
      classificacao, filtros
    }
  })
  .then(res => {
    return res.data
  })
  .catch(err => err)
}

export const getFiltrosPorte = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getPorte', 
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosSetor = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getSetor', 
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosNatureza = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getNatureza', 
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosMunicipio = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getMunicipios'
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosSecaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getSecaoAtividade'
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getFiltrosDescricaoAtividade = async () => {
  return await axios({
    method: 'GET', 
    url: 'http://localhost:3000/getDescricaoAtividade'
  })
  .then(res => {
    return res.data.resultTable.rows
  })
  .catch(err => err)
}

export const getAbertasMes = async (ano, filtros) => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/getAbertasMensal', 
    data: {
      ano, filtros
    }
  })
  .then(res => {
    return res
  })
  .catch(err => err)
}

export const getAbertasAnual = async (classificacao, filtros) => {
  return await axios({
    method: 'POST', 
    url: 'http://localhost:3000/getAbertasAnual', 
    data: {
      classificacao, filtros
    }
  })
  .then(res => {
    return res.data.numDocsScanned
  })
  .catch(err => err)
}