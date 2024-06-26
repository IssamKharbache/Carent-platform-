import { ReactNode, useState } from 'react';
import { DateInput, DateValue } from '@mantine/dates';

interface SelectDateProps {
    label?:ReactNode;
   value? :DateValue | Date;
   onChange?:(value: DateValue) => void;
   minDate?: Date ;

}

const SelectDate = ({label , value,onChange , minDate}:SelectDateProps) => {

  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select a date"
      minDate={minDate}
      width="100%"
    />
  );
}

export default SelectDate;