import { Select } from '@mantine/core'
import React from 'react'

const SelectCountry = () => {
  return (
    <Select
    label="Country"
    placeholder="Morroco"
    data={['Morroco', 'Germany', 'Usa', 'Serbia']}
    searchable
    nothingFoundMessage="Country not found"
  />
  )
}

export default SelectCountry