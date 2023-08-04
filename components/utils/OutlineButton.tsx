import { ThemeProvider, Button, createTheme, ButtonProps } from '@mui/material'
import React, { FC } from 'react'

const OutlineButton: FC<ButtonProps> = ({
    children,
    ...props
}) => {
  return (
    <Button {...props} className={"bg-black  px-[17px] text-white font-clash-display text-[16px] border border-white hover:bg-black lg:text-[18px] capitalize rounded-[10px]" + props.className }> 
        { children }
    </Button>
  )
}

export default OutlineButton
