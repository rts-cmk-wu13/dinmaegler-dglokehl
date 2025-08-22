import { redirect } from 'next/navigation'
import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import Button from "@/components/Button";
import FormField from "@/components/forms/FormField";
import AuthForm from "@/components/forms/AuthForm";

import { hasCookie } from "@/utils/cookies";

export const metadata = {
    title: 'Log ind',
}


export default async function LoginPage() {
    if (await hasCookie("loginToken")) {
        console.log("hasCookie: loginToken")
        redirect("/")
    }

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Account Login" />

            <div className="max-w-maxw-default py-24">
                <AuthForm onSubmit={"handleLogin"} className="lg:p-48 py-16 flex flex-col gap-10 inset-shadow-default">
                    <div className="flex flex-col gap-6">
                        <h2 className="heading-2 text-center">
                            Log ind på din konto
                        </h2>

                        <FormField label="Email">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </FormField>

                        <FormField label="Password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </FormField>

                        <Button className="!py-4 w-full">
                            Log ind
                        </Button>
                    </div>

                    <div>
                        <p className="mb-4 body-1 max-lg:text-center">
                            Log ind med
                        </p>
                        <div className="grid lg:grid-cols-3 gap-4">
                            <Button className="!py-4 !bg-[#DD4B39]">
                                Google
                            </Button>
                            <Button className="!py-4 !bg-[#3B5999]">
                                Facebook
                            </Button>
                            <Button className="!py-4 !bg-[#1DA1F2]">
                                Twitter
                            </Button>
                        </div>
                    </div>

                    <p className="body-1 text-center">
                        Har du ikke en konto? <Link href="/signup" className="text-[#2F80ED] hover:underline">Opret bruger.</Link>
                    </p>
                </AuthForm>
            </div>
        </PageWrapper>
    )
}