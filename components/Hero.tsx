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
import CopyRight from '../assets/copyright.png'
import * as yup from 'yup'
import { UserProps } from 'types'
import { createUser } from '../firebase'
import axios from 'axios'
import { useRouter } from 'next/router'

const Hero = () => {
    const route = useRouter()
    const { days, hours, minutes, seconds } = countDown()
    const [waitlist, setWaitlist] = useState<boolean>(false)
    const [referral, setReferral] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)
    const [referralCode, setReferralCode] = useState<string>('')
    const validationSchema = yup.object<UserProps>({
        walletType: yup.string().required('Required'),
        walletAddress: yup.string().required('Required'),
        email: yup.string().email('Invalid email address').required('Required'),
        twitterHandle: yup.string().required('Required'),
        telegramHandle: yup.string().required('Required')
    })

    const handleCopyText = () => {
        let copyReferral = document.getElementById("copyReferral");
 
             if(copyReferral){
                // @ts-ignore
                copyReferral.select();
                // @ts-ignore
                copyReferral.setSelectionRange(0, 99999); // For mobile devices

                // Copy the text inside the text field
                // @ts-ignore
                navigator.clipboard.writeText(copyReferral.value);
                setCopied(true)
                setTimeout(() => setCopied(false), 3000)
             }  
    }
 
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
                <div className=" w-[80px] h-[60px] lg:w-[97px] p-[1px] lg:h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className=" text-[18px] lg:text-[24px]">{days}</div>
                       <div className=" text-[20px] lg:text-[28px]">Days</div>
                    </div>
                </div>

                <div className=" w-[80px] h-[60px] lg:w-[97px] p-[1px] lg:h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className=" text-[18px] lg:text-[24px]">{hours}</div>
                       <div className=" text-[20px] lg:text-[28px]">Hrs</div>
                    </div>
                </div>

                <div className=" w-[80px] h-[60px] lg:w-[97px] p-[1px] lg:h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className=" text-[18px] lg:text-[24px]">{minutes}</div>
                       <div className=" text-[20px] lg:text-[28px]">Min</div>
                    </div>
                </div>

                <div className=" w-[80px] h-[60px] lg:w-[97px] p-[1px] lg:h-[74px] flex bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] box-border rounded-[10px]">
                    <div className='bg-[#000000] flex-1 rounded-[10px] pl-2 py-1 text-left'>
                       <div className=" text-[18px] lg:text-[24px]">{seconds}</div>
                       <div className=" text-[20px] lg:text-[28px]">Secs</div>
                    </div>
                </div>
            </div>
            <SolidButton onClick={() => setWaitlist(prev => !prev)} >
                Join Waitlist & Airdrop
            </SolidButton>
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-center gap-2 text-white font-ranade text-[12px] lg:text-[14px] py-4">
                <Image alt='copyright' src={CopyRight}/>
                <span> 2023 BlowX Inc. All right reserved </span>
            </div>
      </div>
      <Modal
      open={waitlist}
      onClose={() => setWaitlist(prev => !prev)}
      title='Join Waitlist & Airdrop'
      subtitle='Kindly fill in the form and join our waitlist to follow the development progress. You will be notified when we launch.'
      contents={
        <RenderForm
        onSubmit={async (e) => {
           const res = await createUser(e, route.query.code as string | undefined)
           if(res?.success) {
            setReferralCode(res?.referralCode || '')
            setWaitlist(false)
            setReferral(true)
             await axios.post("https://chat-earn.herokuapp.com/api/subscribe", e.email)
             .then(response => console.log(response))
             .catch(err => console.log(err))
           }

        }}
        validationSchema={validationSchema}
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
      title='Submission Completed'
      subtitle='You have successfully joined our waitlist, you will be notified when we launch, Please follow us on social media.'
      contents={<div className='mb-4'>
          <div className="bg-gradient-to-b from-[#8F8F8F] to-[#8F8F8F00] rounded-[10px] p-[1px]">
            <Button onClick={handleCopyText} className='bg-black w-full py-[10px] lowercase gap-2 rounded-[10px] font-ranade text-white text-[10px] flex justify-center items-center font-[200]'>
                <Image alt='copy-icon' src={CopyIcon} />
                <span>Copy & share your referral link to earn more tokens</span>
            </Button>
          </div>
          <div className="text-center font-ranade text-white text-[10px] font-[200]"> { copied ? 'Copied: ' : '' } BlowXsquad/{referralCode}</div>
         { referralCode && <input type="text" className='hidden' id='copyReferral' disabled defaultValue={`${window.location.origin}?code=${referralCode}`} /> }
      </div>}
      />
    </div>
  )
}

export default Hero
