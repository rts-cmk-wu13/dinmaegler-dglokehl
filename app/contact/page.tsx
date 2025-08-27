import Link from "next/link";
import { FaPhone, FaPaperPlane, FaLocationDot } from "react-icons/fa6";

import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import ContactForm from "@/components/forms/ContactForm";
import { footerCards } from "@/data/footerCards";

export const metadata = {
    title: 'Kontakt os',
}


export default async function Contact() {
    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Kontakt os" />

            <div className="centered-default py-24 max-sm:py-12">
                <h2 className="mb-4 heading-2">
                    Vi sidder klar til at besvare dine spørgsmål
                </h2>
                <p className="body-1">
                    Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
                </p>

                <div className="mt-16 max-sm:mt-8 flex max-lg:flex-col justify-between gap-7.5">
                    <ContactForm newsletter className="flex-1" />

                    <div className="px-8 sm:py-6 rounded-sm inset-shadow-default text-center *:border-b-[1px] *:border-b-c-shape-1 *:last:border-b-0">
                        {footerCards.map((card, i) => (
                            <div className="w-full p-12 max-sm:p-6 flex flex-col items-center gap-3 max-sm:gap-1" key={i}>
                                <figure className="size-12 grid place-items-center rounded-full bg-c-primary-1 text-c-white *:size-6">
                                    {card.icon}
                                </figure>
                                <h3 className="heading-4">
                                    {card.heading}
                                </h3>
                                <Link href={card.href} className="body-1 hover:underline">
                                    {card.body}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.7628077147206!2d12.077803177407219!3d55.64094037304308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fda8582267b%3A0x3a79b4f713b2bf83!2sSt%C3%A6ndertorvet%2078%2C%204000%20Roskilde!5e0!3m2!1sen!2sdk!4v1754645332664!5m2!1sen!2sdk" className="h-125 border-0" loading="lazy" ></iframe>
        </PageWrapper>
    )
}