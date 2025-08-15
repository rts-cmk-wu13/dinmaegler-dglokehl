import Link from "next/link";
import type { AgentProps } from "@/types/agents";
import { LuSearch } from "react-icons/lu";

import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import AgentContact from "@/components/AgentContact";
import FormField from "@/components/FormField";
import ContactForm from "@/components/ContactForm";


interface ParamsProps {
    params: {
        id: string;
    };
}


export default async function Agent({ params }: ParamsProps) {
    const { id } = await params;

    const data = await fetch(`https://dinmaegler.onrender.com/agents/${id}`)
    const agent: AgentProps = await data.json()
    console.log("agent:", agent)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Kontakt en medarbejder" />

            <div className="py-30 max-w-maxw-default flex gap-7.5">
                <div className="p-10 inset-shadow-default">
                    <AgentContact agent={agent} />

                    <section className="my-7.5">
                        <h2 className="mb-3 heading-4">
                            Om {agent.name}
                        </h2>
                        <p>
                            {agent.description}
                        </p>
                    </section>

                    <ContactForm heading={`Kontakt ${agent.name}`} />
                </div>


                <div className="flex flex-col gap-5">
                    <div className="p-8 bg-c-shape-2">
                        <label htmlFor="searchproperty" className="heading-3">
                            Search property
                        </label>

                        <hr className="mt-4 mb-6 border-c-shape-1" />

                        <div className="relative flex items-center">
                            <LuSearch className="size-5 absolute left-3 text-c-body-2" />
                            <input type="text" name="searchproperty" id="searchproperty" placeholder="Search" className="px-2.5 pl-10 py-2 w-72 bg-c-white inset-shadow-default rounded-xs placeholder:text-c-body-2 focus:outline-0" />
                        </div>
                    </div>

                    <div className="py-28 px-8 bg-c-primary-1 heading-2 text-c-white text-center">
                        <h4>
                            Find The Best Property <br />
                            For Rent Or Buy
                        </h4>

                        <hr className="my-5 border-c-white" />

                        <p className="body-1 text-c-white">
                            Call us now
                        </p>
                        <Link href="tel:+00123456789">
                            +00 123 456 789
                        </Link>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}