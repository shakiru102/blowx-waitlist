import Image from 'next/image'
import React, { useState } from 'react'
import Bg from '../assets/bg.png'
import Logo from '../assets/logo.png'
import countDown from '../hooks/CountDown'
import Modal from './Modal'
import SolidButton from './utils/SolidButton'
import RenderForm from './utils/RenderForm'
import { Button } from '@mui/material'
import CopyIcon from '../assets/copyicon.png'

const Hero = () => {
  
    const { days, hours, minutes, seconds } = countDown()
    const [waitlist, setWaitlist] = useState<boolean>(false)
    const [referral, setReferral] = useState<boolean>(false)
 
  return (
    <div className='bg-black h-screen overflow-hidden flex justify-center items-center text-center relative'>
       <div className="fixed top-0 left-0">
            <Image alt='bg' src={Bg} />
       </div>
      <div className='lg:w-1/2 '>
            <div className='flex justify-center mb-16 w-full lg:mb-24'>
                <Image alt='logo' src={Logo} />
            </div>
            <div className="text-white text-[28px] lg:text-[32px]  font-clash-display">
                Join us, Let’s get started
            </div>
            <div className=' mb-8 mt-4 font-clash-display inline-block text-transparent text-[20px] lg:text-[24px] bg-clip-text bg-gradient-to-br from-white to-[rgba(255,255,255,0.00)]'>
                Building the largest global Next-Gen ecosystem with real world assets, giving ownership to everyone.
            </div>
            <div className="mb-16 text-white font-clash-display grid mx-auto w-full grid-cols-4 place-items-center">
                <div className="w-[97px] p-[1px] h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className="text-[24px]">{days}</div>
                       <div className="text-[28px]">Days</div>
                    </div>
                </div>

                <div className="w-[97px] p-[1px] h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className="text-[24px]">{hours}</div>
                       <div className="text-[28px]">Hrs</div>
                    </div>
                </div>

                <div className="w-[97px] p-[1px] h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className="text-[24px]">{minutes}</div>
                       <div className="text-[28px]">Min</div>
                    </div>
                </div>

                <div className="w-[97px] p-[1px] h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className="text-[24px]">{seconds}</div>
                       <div className="text-[28px]">Secs</div>
                    </div>
                </div>
            </div>
            <SolidButton onClick={() => setWaitlist(prev => !prev)} >
                Join Waitlist & Airdrop
            </SolidButton>
      </div>
      <Modal
      open={waitlist}
      onClose={() => setWaitlist(prev => !prev)}
      title='Join Waitlist & Airdrop'
      subtitle='Kindly fill in the form and join our waitlist to follow the development progress. You will be notified when we launch.'
      contents={
        <RenderForm
        onSubmit={(e) => {
         setWaitlist(false)
         setReferral(true)
        }}
          formValue={[
            {
                label: 'Select Wallet Type*',
                name: "walletType",
                placeholder: 'Input wallet address',
                inputType: 'select',
                selectOptions: [
                    { label: 'ENS',  value: 'ENS' }, 
                    { label: 'ETH Address',  value: 'ETH Address' }, 
                    { label: 'BEP20 Address',  value: 'BEP20 Address' }, 
                    { label: 'ARB Address',  value: 'ARB Address' }
                ]
            },
            {
                label: 'Wallet Address*',
                name: "walletAddress",
                placeholder: 'Enter your wallet address',
            },
            {
                label: 'Email Address*',
                name: "email",
                placeholder: 'changemaker@blowx.ai',
            },
            {
                label: 'Twitter Handle*',
                name: "twitterHandle",
                placeholder: 'Twitter username',
            },
            {   
                label: 'Telegram Handle*',
                name: "telegramHandle",
                placeholder: 'Telegram',
            },
          ]}
        />
      }
      />
      <Modal
      open={referral}
      closeIcon
      onClose={() => setReferral(prev => !prev)}
      maxWidth='sm'
      title='Join Waitlist & Airdrop'
      subtitle='You have successfully joined our waitlist, you will be notified when we launch, Please follow us on social media.'
      contents={<div className='mb-4'>
          <div className="bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] rounded-[10px] p-[1px]">
            <Button className='bg-black w-full py-[10px] lowercase gap-2 rounded-[10px] font-ranade text-[#8F8F8F] text-[10px] flex justify-center items-center font-[200]'>
                <Image alt='copy-icon' src={CopyIcon} />
                <span>Copy & share your referral link to earn more tokens</span>
            </Button>
          </div>
          <div className="text-center font-ranade text-[#8F8F8F] text-[10px] font-[200]">BlowXsquad/463462</div>
      </div>}
      />
    </div>
  )
}

export default Hero
