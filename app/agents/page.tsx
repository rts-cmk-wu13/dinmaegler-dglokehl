import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";

import AgentGrid from "@/components/AgentGrid";


export default async function Agents() {
    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Medarbejdere i Roskilde" />

            <div className="max-w-maxw-default py-24">

                <AgentGrid />
            </div>
        </PageWrapper>
    )
}