import {motion} from "motion/react";
import {fadeUp} from "@/lib/animations.ts";
import SectionHeader from "@/components/SectionHeader.tsx";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";

import {Field, FieldError} from "@/components/ui/field";

type contactFormValues = {
    name: string,
    company: string,
    email: string,
    phone: string,
    message: string,
}
const Contact = () => {
        const form = useForm<contactFormValues>({
            defaultValues: {
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '',
            } // Se eliminó el punto y coma erróneo que tenías aquí
        });

        const onSubmit = (values: contactFormValues) => {
            console.log(values);
        };

        return (
            <motion.section
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: (0.8)}}
                variants={fadeUp}
                className='mt-10 scroll-mt-10 '
                id='contact'>

                <SectionHeader
                    subtitle='Contacto'
                    title='¿Tienes un proyecto o una oportunidad? Hablemos'
                />
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full mx-auto space-y-4 mt-10 bg-background p-2">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Field>
                            <Input
                                placeholder='Nombre completo'
                                className='bg-background border border-border text-foreground'
                                {...form.register('name')}
                                aria-invalid={!!form.formState.errors.name}/>
                            {form.formState.errors.name && (
                                <FieldError>
                                    {form.formState.errors.name.message}
                                </FieldError>
                            )}
                        </Field>

                        <Field>
                            <Input
                                placeholder='Nombre de la compañia'
                                className='bg-background border border-border text-foreground'
                                {...form.register('company')}
                                aria-invalid={!!form.formState.errors.company}/>
                            {form.formState.errors.company && (
                                <FieldError>
                                    {form.formState.errors.company.message}
                                </FieldError>
                            )}
                        </Field>

                        <Field>
                            <Input
                                type='email'
                                placeholder='Correo electronico'
                                className='bg-background border border-border text-foreground'
                                {...form.register('email')}
                                aria-invalid={!!form.formState.errors.email}/>
                            {form.formState.errors.email && (
                                <FieldError>
                                    {form.formState.errors.email.message}
                                </FieldError>
                            )}
                        </Field>


                        <Field>
                            <Input
                                type='tel'
                                placeholder='Telefono'
                                className='bg-background border border-border text-foreground'
                                {...form.register('phone')}
                                aria-invalid={!!form.formState.errors.phone}/>
                            {form.formState.errors.phone && (
                                <FieldError>
                                    {form.formState.errors.phone.message}
                                </FieldError>
                            )}
                        </Field>
                    </div>
                    <Field>
                        <Textarea
                            placeholder='Escribe tu mensaje'
                            className="h-36 bg-background border border-border text-foreground"
                            {...form.register('message')}
                            aria-invalid={!!form.formState.errors.message}/>
                        {form.formState.errors.message && (
                            <FieldError>
                                {form.formState.errors.message.message}
                            </FieldError>
                        )}
                    </Field>
                    <Button type='submit' className='bg-primary text-primary-foreground' size='lg'>
                        Enviar mensaje
                    </Button>
                </form>
            </motion.section>
        )
    }
;
export default Contact;