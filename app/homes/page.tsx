import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";

import CardGrid from "@/components/CardGrid";
import PriceRange from "@/components/PriceRange";
import HomeType from "@/components/HomeType";

import type { HomeProps } from "@/types/homes";

export default async function Homes(props: {
    searchParams?: Promise<{
        type_eq?: string;
        price_gte?: string;
        price_lte?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    console.log(searchParams)

    let link = "https://dinmaegler.onrender.com/homes"
    if (searchParams) {
        let index = 0
        for (const [key, value] of Object.entries(searchParams)) {
            if (index === 0) {
                link += `?${key}=${value}`
            } else {
                link += `&${key}=${value}`
            }
            index++
            // console.log(`${key}: ${value}`);
        }
    }

    const data = await fetch(link)
    let homes = await data.json()
    console.log(homes)


    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Boliger til salg" />

            <div className="max-w-maxw-default py-24">
                <div className="mb-18">
                    <h2 className="heading-4">
                        Søg efter dit drømmehus
                    </h2>

                    <hr className="mt-1 mb-5" />

                    <div className="w-full flex gap-3 body-2">
                        <HomeType />

                        <PriceRange />
                    </div>
                </div>

                <CardGrid data={homes} type="homes" />

            </div>
        </PageWrapper>
    )
}