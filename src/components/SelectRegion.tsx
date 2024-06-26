import { Select } from '@mantine/core'
import React from 'react'

const SelectRegion = () => {
  return (
    <Select
    label="Region"
    placeholder="Casablanca/Settat"
    data={['Fes/Meknes', 'Laayoun', 'Marrakech']}
    searchable
    nothingFoundMessage="Region not found"
  />
  )
}

export default SelectRegion