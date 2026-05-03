import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations.ts";
import SectionHeader from "@/components/SectionHeader.tsx";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { Field, FieldError } from "@/components/ui/field";

type contactFormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
};

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<contactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
    });


    const onSubmit = async (values: contactFormValues) => {
        try {
            setLoading(true);

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: values.name,
                    company: values.company,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                },
                publicKey
            );

            console.log("Mensaje enviado correctamente");

            form.reset();

        } catch (error) {
            console.error("Error enviando mensaje:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUp}
            className="mt-10 scroll-mt-10"
            id="contact"
        >
            <SectionHeader
                subtitle="Contacto"
                title="¿Tienes un proyecto o una oportunidad? Hablemos"
            />

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full mx-auto space-y-4 mt-10 bg-background p-2"
            >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Field>
                        <Input
                            placeholder="Nombre completo"
                            {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                            <FieldError>
                                {form.formState.errors.name.message}
                            </FieldError>
                        )}
                    </Field>

                    <Field>
                        <Input
                            placeholder="Nombre de la compañía"
                            {...form.register("company")}
                        />
                    </Field>

                    <Field>
                        <Input
                            type="email"
                            placeholder="Correo electrónico"
                            {...form.register("email")}
                        />
                    </Field>

                    <Field>
                        <Input
                            type="tel"
                            placeholder="Teléfono"
                            inputMode="numeric"
                            {...form.register("phone", {
                                required: "El teléfono es obligatorio",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Solo se permiten números",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Debe tener al menos 10 dígitos",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Máximo 15 dígitos",
                                },
                            })}
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "");
                            }}
                        />

                        {form.formState.errors.phone && (
                            <FieldError>
                                {form.formState.errors.phone.message}
                            </FieldError>
                        )}
                    </Field>

                </div>

                <Field>
                    <Textarea
                        placeholder="Escribe tu mensaje"
                        className="h-36"
                        {...form.register("message")}
                    />
                </Field>

                <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                </Button>
            </form>
        </motion.section>
    );
};

export default Contact;