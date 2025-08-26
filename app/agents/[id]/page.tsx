import Link from "next/link";
import { LuSearch } from "react-icons/lu";

import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import AgentContact from "@/components/agent/AgentContact";
import ContactForm from "@/components/forms/ContactForm";
import Search from "@/components/forms/Search";

import { getAgentData } from "@/api/fetches";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data = await fetch(`https://dinmaegler.onrender.com/agents/${id}`).then((res) =>
        res.json()
    )

    return {
        title: data.name
    }
}


export default async function Agent({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const agent = await getAgentData(id)
    console.log("agent:", agent)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Kontakt en medarbejder" />

            <div className="centered-default py-30 flex max-lg:flex-col gap-7.5">
                <div className="p-10 inset-shadow-default rounded-sm">
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
                    <div className="p-8 bg-c-shape-2 rounded-sm">
                        <label htmlFor="searchproperty" className="heading-3">
                            Search property
                        </label>

                        <hr className="mt-4 mb-6 border-c-shape-1" />

                        <Search agentId={agent.id}>
                            <LuSearch className="size-5 absolute left-3 text-c-body-2 pointer-events-none" />
                            <input type="search" name="search" id="search" placeholder="Search" className="px-2.5 pl-10 size-full max-lg:w-full lg:w-72 bg-c-white inset-shadow-default rounded-sm placeholder:text-c-body-2 focus:outline-0" />
                        </Search>
                    </div>

                    <div className="py-28 px-8 bg-c-primary-1 heading-2 text-c-white text-center rounded-sm">
                        <h4>
                            Find The Best Property <br />
                            For Rent Or Buy
                        </h4>

                        <hr className="my-5 border-c-white" />

                        <p className="body-1 text-c-white">
                            Call us now
                        </p>
                        <Link href="tel:+00123456789" className="hover:underline">
                            +00 123 456 789
                        </Link>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}