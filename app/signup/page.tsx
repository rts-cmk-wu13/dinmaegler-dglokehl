import { redirect } from 'next/navigation'
import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import Button from "@/components/Button";
import FormField from "@/components/forms/FormField";
import AuthForm from "@/components/forms/AuthForm";

import { hasCookie } from "@/utils/cookies";
 
export const metadata = {
    title: 'Opret bruger',
}


export default async function SignupPage() {
    if (await hasCookie("loginToken")) {
        console.log("hasCookie: loginToken")
        redirect("/")
    }

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Account Register" />

            <div className="max-w-maxw-default py-24">
                <AuthForm onSubmit="handleSignup" className="lg:p-48 py-16 flex flex-col gap-10 inset-shadow-default">
                    <div className="flex flex-col gap-6">
                        <h2 className="heading-2 text-center">
                            Opret bruger hos Din Mægler
                        </h2>

                        <FormField label="Fulde navn">
                            <input type="text" name="name" id="name" placeholder="Fulde navn" />
                        </FormField>

                        <FormField label="Email">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </FormField>

                        <FormField label="Password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </FormField>

                        <FormField label="Bekræft password">
                            <input type="password" name="password2" id="password2" placeholder="Bekræft password" />
                        </FormField>

                        <Button className="!py-4 !w-full">
                            Opret bruger
                        </Button>
                    </div>

                    <p className="body-1 text-center">
                        Har allerede en konto? <Link href="/login" className="text-[#2F80ED] hover:underline">Log ind</Link>
                    </p>
                </AuthForm>
            </div>
        </PageWrapper>
    )
}