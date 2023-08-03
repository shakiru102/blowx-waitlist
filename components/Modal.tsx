import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import ModalLogo from '../assets/modal-logo.png'
import MediaIcons from './utils/MediaIcons'
import { ModalProps } from '../types'
import { IoIosCloseCircle } from 'react-icons/io'

const Modal: FC<ModalProps> = ({
    contents,
    subtitle,
    title,
    open,
    onClose,
    maxWidth,
    closeIcon
}) => {
  return (
    <Dialog
    open={open}
    onClose={onClose}
    scroll='paper'
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
    maxWidth={maxWidth || 'xs'}
    PaperProps={{
        className: "bg-gradient-to-b from-[#8F8F8F] to-black p-[1px] rounded-[10px]"
    }}
    >
    <div className='bg-black text-white rounded-[10px] px-1 py-4'>
        <DialogTitle>
           {
             closeIcon && <div className='text-right'>
                          <IconButton onClick={onClose}>
                              <IoIosCloseCircle color='white' size={24} />
                          </IconButton>
                          </div>
           }
            <div className="text-center flex justify-center">
                <Image alt='logo' src={ModalLogo} />
            </div>
            <div className='font-clash-display text-[20px] text-center lg:text-[24px] mt-4'>
            {title}
            </div>
            <div className=' my-4 text-[13px] lg:text-[16px] font-ranade text-center font-[200] text-[#FFF]'>
              { subtitle }
            </div>
        </DialogTitle>
        <DialogContent>
            { contents }
            <MediaIcons />
        </DialogContent>
    </div>
    </Dialog> 
  )
}

export default Modal
