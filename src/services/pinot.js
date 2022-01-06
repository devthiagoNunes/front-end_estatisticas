import axios from "axios";

const pinot = axios.create({
  baseURL: 'http://179.127.13.245:8099'
})

export default pinot