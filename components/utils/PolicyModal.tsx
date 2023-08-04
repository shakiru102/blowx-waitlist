import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, { FC } from 'react'
import { ModalProps } from '../../types'
import SolidButton from './SolidButton'
import OutlineButton from './OutlineButton'

const PolicyModal: FC<ModalProps> = ({
    contents,
    subtitle,
    title,
    open,
    onClose,
    maxWidth,
    closeIcon,
    policyContents
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
        className: "bg-gradient-to-b from-[#8F8F8F] to-black p-[1px] rounded-[10px] "
    }}
    >
    <div className='bg-black text-white rounded-[10px] px-1 py-4'>
        <DialogTitle>
        <div className='font-clash-display text-[20px] text-center lg:text-[24px] mt-4'>
            {title}
            </div>
        </DialogTitle>
        <DialogContent dividers>
            <DialogContentText className='text-white font-ranade'>
                { policyContents && policyContents.map((item, i:number) => (
                    <p key={i} className='mb-8'>
                        <div>{item.subtitle}</div>
                        <div>{item.text}</div>
                    </p>
                )) }
            </DialogContentText>
            {
            title == "COOKIES USE" &&
            <DialogActions>
                <SolidButton onClick={onClose}>Accept All</SolidButton>
                <OutlineButton onClick={onClose}>Reject All</OutlineButton>
             </DialogActions>
             }
        </DialogContent>
    </div>
    </Dialog> 
  )
}

export default PolicyModal
