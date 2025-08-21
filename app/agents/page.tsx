import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import AgentGrid from "@/components/agent/AgentGrid";

import { getAgentsData } from "@/api/fetches";

export const metadata = {
    title: 'Mæglere',
}


export default async function Agents() {
    const agents = await getAgentsData("https://dinmaegler.onrender.com/agents")
    console.log("agents:", agents)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Medarbejdere i Roskilde" />

            <div className="max-w-maxw-default py-24">

                <AgentGrid data={agents} />
            </div>
        </PageWrapper>
    )
}