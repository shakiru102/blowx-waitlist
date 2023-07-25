import { Input, InputLabel } from '@mui/material'
import React, { FC } from 'react'
import { InputProps } from '../../types'

const TextInput: FC<InputProps> = ({...props}) => {
  return (
    <div className='mb-4'>
    <InputLabel className='text-white font-ranade text-[16px] font-[200] lg:text-[18px] mb-[1px]'>{props.label}</InputLabel>
      <div className="bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] rounded-[10px] p-[1px]">
      <Input 
      onChange={props.handleChange}
      name={props.name}
      value={props.value}
      fullWidth
      className='bg-black p-[10px] text-white font-ranade rounded-[10px]'
      placeholder={props.placeholder}
      disableUnderline
      />
     </div>
    </div>
  )
}

export default TextInput
