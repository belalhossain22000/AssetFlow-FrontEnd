import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TFormConfig = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues?: Record<string, any>;
  };
  
  type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
  } & TFormConfig;

const Form = ({ onSubmit, children, defaultValues }: TFormProps) => {
    const formConfig: TFormConfig = {};

    if (defaultValues) {
      formConfig['defaultValues'] = defaultValues;
    }
    const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
    <form className="w-full container mx-auto " onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
  )
}

export default Form