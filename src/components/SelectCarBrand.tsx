import { Select } from '@mantine/core'


const SelectCarBrand = () => {
  return (
    <Select
    label="Car brand"
    placeholder="All"
    data={['Audi', 'BMW', 'Mercedes']}
    searchable
    nothingFoundMessage="Car not found"
  />
  )
}

export default SelectCarBrand;