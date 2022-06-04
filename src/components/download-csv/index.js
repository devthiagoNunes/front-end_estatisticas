import React from "react"
import { CSVLink } from "react-csv"

import './style.css'

export const DownloadCSV = ({data_to_download}) => {
 return (
    <CSVLink className='csvlink' data={data_to_download}>
        <div>
            Baixar CSV
        </div>
    </CSVLink>
 )
}