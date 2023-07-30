import React, { FC } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoTelegram, BiLogoMediumSquare } from 'react-icons/bi'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { MediaProps } from '../../types'
import { IconButton } from '@mui/material'
 
const MediaIcons: FC = () => {

    const media: MediaProps[] = [
        {
          icon: <BsTwitter color='white' size={24}/>,
          link: 'https://twitter.com/blowx_official?s=21&t=WsOunCWsNhdoyCG_aroRbQ'
        },
          {
            icon: <BiLogoTelegram color='white' size={24}/>,
            link: 'https://t.me/BlowX_Officia1'
        },
        {
          icon: <AiFillInstagram  color='white' size={24}/>,
          link: 'https://instagram.com/blowx_official?igshid=OGQ5ZDc2ODk2ZA=='
        },
        {
          icon: <BiLogoMediumSquare color='white' size={24}/>,
          link: 'https://medium.com/@BlowX_Official'
        },
        {
          icon: <BsGithub color='white' size={24}/>,
          link: 'https://github.com/BlowX-Official'
        }
    ]

  return (
    <div className='flex justify-center gap-8'>
       {
        media.map((item: MediaProps, index: number) => (
          <a href={item.link} target='_blank' key={index}>
             <IconButton >
              { item.icon }
            </IconButton>
          </a>
        ))
       }
    </div>
  )
}

export default MediaIcons
