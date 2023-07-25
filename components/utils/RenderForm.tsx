import { Formik } from 'formik'
import React, { FC } from 'react'
import { InputProps } from '../../types'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import SolidButton from './SolidButton'

interface RenderFormProps {
    formValue: InputProps[];
    onSubmit: (e?: any) => void;
}

const RenderForm: FC<RenderFormProps> = ({
    formValue,
    onSubmit
}) => {
  return (
   <Formik
   onSubmit={onSubmit}
   initialValues={{}}
   >
    {({ values, handleChange, handleSubmit }) => (
        <>
         { 
           formValue.map((item: InputProps, i: number) => {
            switch (item.inputType) {
                case 'select':
                    return <SelectInput placeholder={item.placeholder} label={item.label} name={item.name} handleChange={handleChange(item.name)} selectOptions={item.selectOptions} key={i} />
                default:
                    return <TextInput  placeholder={item.placeholder} label={item.label} name={item.name} handleChange={handleChange(item.name)}  key={i} />;
            }
           })
         }
         <SolidButton onClick={() => handleSubmit()} className='w-[100%] mb-4'>
            Submit
         </SolidButton>
        </>
    )}
   </Formik>
  )
}

export default RenderForm
