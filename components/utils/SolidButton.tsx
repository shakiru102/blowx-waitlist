import { Button, ButtonProps } from '@mui/material'
import React, { FC } from 'react'

const SolidButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
  return (
    <Button {...props} className={'bg-white hover:bg-white px-[17px] text-black font-clash-display text-[16px] lg:text-[18px] capitalize rounded-[10px] ' + props.className }> 
        { children }
    </Button>
  )
}

export default SolidButton
