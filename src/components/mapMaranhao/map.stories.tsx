import { Meta } from '@storybook/react'
import { MapMaranhao } from '.'

type MapMaranhaoProps = { 
  dataToMap: (string | number)[][]
}

export default {
  title: 'Component/MapMaranhao',
  component: MapMaranhao,
  args: {
    dataToMap: [
      ['São Luís', 14852],
      ['Vargem Grande', 12852],
      ['Paço do Lumiar', 10852],
      ['Tutóia', 8852],
    ]
  },
  argTypes: {
    dataToMap: {
      type: { name: 'array' },
      description: 'Deve ser uma lista(Array) de arrays com duas posições, onde a primeira é uma string com o nome de uma cidade(esse nome deve estar igual ao que está no arquivo map_MA.json, se estiver diferente será ocasionado um erro) e a segunda posição deve ser um valor numérico.'
    }
  },

} as Meta<MapMaranhaoProps>

export const Component = (args: MapMaranhaoProps) => (
  <div style={{
    maxWidth: '50%',
    position: 'relative',
  }}>
    <MapMaranhao {...args} />   
  </div>
)