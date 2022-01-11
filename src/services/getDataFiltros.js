// import axios from 'axios'

// export const getAbertasDadosFiltros = async (filtros) => {

//   let resDadosFiltros = []
//   console.log(filtros)
//   for (let i = 0; i < filtros.length; i++) {
//     resDadosFiltros.push(
//       await axios({
//         method: 'POST', 
//         url: 'http://179.127.13.245:3000/query/sql', 
//         headers: {
//           'Target-URL': 'http://pinot-broker:8099',
//         },
//           data: { "sql": `select count(*) from statistical where ${filtros[1].filtro} = ${filtros[1].value}`}
//         })
//         .then(res => {
//           return res.data.resultTable.rows
//         })
//         .catch(err => console.log(err))
//     )
//   }

//   return resDadosFiltros
// }