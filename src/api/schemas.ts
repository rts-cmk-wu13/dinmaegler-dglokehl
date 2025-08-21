import * as z from "zod";

type FieldError = {
    errors: string[];
};

export type ContactErrors = {
    name: FieldError;
    email: FieldError;
    subject: FieldError;
    message: FieldError;
    newsletter?: FieldError;
};

export const ContactSchema = z.object({
    name: z.string().min(1, "Please enter a name"),
    email: z.email({ message: "Please enter a valid email address" }),
    subject: z.string().min(1, "Please enter a subject"),
    message: z.string().min(1, "Please enter a message"),
    newsletter: z.coerce.boolean().default(false).optional(),
});
