import { Formik } from 'formik'
import React, { FC } from 'react'
import { InputProps } from '../../types'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import SolidButton from './SolidButton'

interface RenderFormProps {
    formValue: InputProps[];
    onSubmit: (e?: any) => void;
    validationSchema?: any
}

const RenderForm: FC<RenderFormProps> = ({
    formValue,
    onSubmit,
    validationSchema
}) => {
  return (
   <Formik
   onSubmit={onSubmit}
   initialValues={{}}
   validationSchema={validationSchema}
   >
    {({ values, handleChange, handleSubmit, errors, isSubmitting }) => (
        <>
         { 
           formValue.map((item: InputProps, i: number) => {
            switch (item.inputType) {
                case 'select':
                    return <div className='mb-1'  key={i}>
                    <SelectInput placeholder={item.placeholder} label={item.label} name={item.name} handleChange={handleChange(item.name)} selectOptions={item.selectOptions} />
                    {/* @ts-ignore */}
                    <div className='text-red-500 text-[10px]'>{errors[item.name]}</div>
                    </div>
                default:
                    return <div className='mb-1'  key={i}>
                    <TextInput  placeholder={item.placeholder} label={item.label} name={item.name} handleChange={handleChange(item.name)}  />
                    {/* @ts-ignore */}
                    <div className='text-red-500 text-[10px]'>{errors[item.name]}</div>
                    </div>
            }
           })
         }
         <SolidButton disabled={isSubmitting} onClick={() => handleSubmit()} className='w-[100%] mb-4'>
          {  isSubmitting ? "Loading..." : "Submit" }
         </SolidButton>
        </>
    )}
   </Formik>
  )
}

export default RenderForm
