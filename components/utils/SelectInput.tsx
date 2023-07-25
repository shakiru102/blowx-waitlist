import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { InputProps } from '../../types';



const SelectInput: FC<InputProps> = ({
    ...props
}) => {
  return (
    <div className='mb-4'>
     <InputLabel className='text-white font-ranade text-[16px] font-[200] lg:text-[18px] mb-[1px]'>{props.label}</InputLabel>
      <div className="bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] rounded-[10px] p-[1px]">
      <Select 
      fullWidth
      name={props.name}
      onChange={props.handleChange}
      value={props.value}
      className='bg-black p-[10px] text-white font-ranade rounded-[10px]'
      placeholder='some text'
      IconComponent={() => <KeyboardArrowDownSharpIcon className='text-white'  />}
      input={<Input disableUnderline />}
      defaultValue={10}
      MenuProps={{
        PaperProps: {
            className: "bg-black  text-white font-ranade"
          }
      }}
      >
        { props.selectOptions?.map((item, i:number) => (
            <MenuItem value={item.value} key={i}>{item.label}</MenuItem>
        )) }
      </Select>
      </div>
    </div >
  )
}

export default SelectInput
