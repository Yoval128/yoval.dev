import {motion} from "motion/react";
import {fadeUp} from "@/lib/animations.ts";
import SectionHeader from "@/components/SectionHeader.tsx";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {useState} from "react";

import {Field, FieldError, FieldLabel} from "@/components/ui/field";

type contactFormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
};

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const form = useForm<contactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "Hola, me gustaría conversar contigo sobre una oportunidad laboral, un proyecto o una posible colaboración. El objetivo es explorar cómo tu experiencia y tus habilidades podrían aportar valor. ¿Podemos hablar?\"",
        },
    });


    const onSubmit = async (values: contactFormValues) => {
        setLoading(true);
        setStatus("idle");


        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if (!serviceId || !templateId || !publicKey) {
                throw new Error("Falta configurar EmailJS.");
            }
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: values.name.trim(),
                    company: values.company.trim() || "No especificada",
                    email: values.email.trim(),
                    phone: values.phone.trim() || "No proporcionado",
                    message: values.message.trim(),
                },
                publicKey
            );

            setStatus("success");
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
            viewport={{once: true, amount: 0.8}}
            variants={fadeUp}
            className="mt-10 scroll-mt-10"
            id="contact"
        >
            <SectionHeader
                subtitle="Contacto"
                title="¿Buscas a alguien que convierta ideas en soluciones tecnológicas?"/>
            <p className="mt-4 max-w-2xl text-muted-foreground">
                Hablemos sobre tu equipo, tu proyecto o el reto técnico
                que necesitas resolver. Cuéntame qué tienes en mente y
                exploremos cómo podría aportar valor.
            </p>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-2xl space-y-5 mt-10 p-8 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors"
            >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field>
                        <FieldLabel htmlFor="name">Nombre completo</FieldLabel>
                        <Input
                            id="name"
                            placeholder="¿Con quién tengo el gusto?"
                            {...form.register("name", {
                                required: "El nombre es obligatorio",
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe tener al menos 3 caracteres"
                                }, maxLength: {
                                    value: 80,
                                    message: "El nombre no puede superar los 80 caracteres",
                                },
                                pattern: {
                                    value: /^[\p{L}\p{M}]+(?:[ '\u2019.-][\p{L}\p{M}]+)*$/u,
                                    message: "Introduce un nombre válido.",
                                },
                            })}
                        />
                        {form.formState.errors.name && (
                            <FieldError>
                                {form.formState.errors.name.message}
                            </FieldError>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="company">Empresa u organización (opcional)</FieldLabel>
                        <Input
                            id="company"
                            placeholder="Empresa u organización (opcional)"
                            {...form.register("company", {
                                maxLength: {
                                    value: 100,
                                    message: "Máximo 100 caracteres",
                                },
                            })}
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="nombre@empresa.com"
                            {...form.register("email", {
                                required: "El correo electrónico es obligatorio",
                                maxLength: {
                                    value: 254,
                                    message: "El correo es demasiado largo",
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Introduce un correo electrónico válido",
                                },
                            })}
                        />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="phone">Teléfono (opcional)</FieldLabel>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="Si prefieres que te contacte por teléfono"
                            inputMode="numeric"
                            {...form.register("phone", {
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
                                onChange: (e) => {
                                    e.target.value = e.target.value.replace(/\D/g, "");
                                },
                            })}
                        />
                        {form.formState.errors.phone && (
                            <FieldError>
                                {form.formState.errors.phone.message}
                            </FieldError>
                        )}

                        {form.formState.errors.phone && (
                            <FieldError>
                                {form.formState.errors.phone.message}
                            </FieldError>
                        )}
                    </Field>
                </div>

                <Field>
                    <FieldLabel htmlFor="message">¿Qué tienes en mente?</FieldLabel>
                    <Textarea
                        id="message"
                        placeholder="Cuéntame brevemente sobre la oportunidad, el proyecto o el desafío técnico. Podemos comenzar con una idea general."
                        className="h-36 resize-none"
                        {...form.register("message", {
                            required: "El mensaje es obligatorio",
                            minLength: {
                                value: 10,
                                message: "El mensaje debe tener al menos 10 caracteres",
                            },
                            maxLength: {
                                value: 2000,
                                message: "El mensaje no puede superar los 2000 caracteres",
                            },
                        })}
                    />
                    {form.formState.errors.message && (
                        <FieldError>
                            {form.formState.errors.message.message}
                        </FieldError>
                    )}
                </Field>

                {status === "success" && (
                    <p role="status" className="text-sm text-green-600">
                        ¡Mensaje enviado correctamente! Gracias por iniciar
                        la conversación.
                    </p>
                )}

                {status === "error" && (
                    <p role="alert" className="text-sm text-destructive">
                        No pudimos enviar tu mensaje. Inténtalo de nuevo
                        en unos momentos.
                    </p>
                )}

                <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Hablemos de tu proyecto"}
                </Button>
                <p className="text-xs text-muted-foreground">
                    Tus datos se utilizarán para responder a tu consulta.
                </p>
            </form>
        </motion.section>
    );
};

export default Contact;