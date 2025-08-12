import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";

import CardGrid from "@/components/CardGrid";


export default async function Agents() {
    const data = await fetch("https://dinmaegler.onrender.com/agents")
    const agents = await data.json()
    console.log(agents)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Medarbejdere i Roskilde" />

            <div className="max-w-maxw-default py-24">

                <CardGrid data={agents} type="agents" />
            </div>
        </PageWrapper>
    )
}