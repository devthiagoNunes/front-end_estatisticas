import { Meta } from '@storybook/react'
import { TreeMapComponente, TreeMapComponenteProps } from '.'

export default {
  title: 'Component/TreeMapComponente',
  component: TreeMapComponente,
  args: {
    treeMapData: [
      ['Data 1', 1],
      ['Data 2', 2],
      ['Data 3', 3],
      ['Data 4', 4],
      ['Data 5', 5],
      ['Data 6', 6],
      ['Data 7', 7],
      ['Data 9', 9],
      ['Data 10', 10],
      ['Data 11', 11],
      ['Data 12', 12],
      ['Data 13', 13],
      ['Data 14', 14],
    ]
  },
  argTypes: {
    treeMapData: {
      description: 'Esse dado deve ser uma lista(Array) com varios arrays de duas posições, sendo a primeira uma string e a segunda posição um valor monetário para aquela informação.'
    }
  },
} as Meta<TreeMapComponenteProps>

export const Component = (args: TreeMapComponenteProps) => <TreeMapComponente {...args} />