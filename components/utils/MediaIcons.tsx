import React, { FC } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoTelegram } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { MediaProps } from '../../types'
import { IconButton } from '@mui/material'
 
const MediaIcons: FC = () => {

    const media: MediaProps[] = [
        {
            icon: <AiFillInstagram  color='white' size={24}/>
        },
        {
            icon: <BiLogoTelegram color='white' size={24}/>
        },
        {
            icon: <BsTwitter color='white' size={24}/>
        }
    ]

  return (
    <div className='flex justify-center gap-8'>
       {
        media.map((item: MediaProps, index: number) => (
          <IconButton key={index}>
            { item.icon }
          </IconButton>
        ))
       }
    </div>
  )
}

export default MediaIcons
