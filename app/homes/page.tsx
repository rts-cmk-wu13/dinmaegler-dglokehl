import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";

import HouseGrid from "@/components/house/HouseGrid";
import PriceRange from "@/components/house/PriceRange";
import HomeType from "@/components/house/HomeType";

import { getUserObj } from "@/api/fetches";
import { HomeProps } from "@/types/homes";
import { getHomesData } from "@/api/fetches";

export const metadata = {
    title: 'Boliger',
}


export default async function Homes(props: {
    searchParams?: Promise<{
        type_eq?: string;
        price_gte?: string;
        price_lte?: string;
        search?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    console.log(searchParams)
    // console.log("searchParams:", searchParams)

    let link = "https://dinmaegler.onrender.com/homes"
    if (searchParams) {
        if (searchParams.type_eq || searchParams.price_gte || searchParams?.price_lte) {
            let index = 0
            for (const [key, value] of Object.entries(searchParams)) {
                if (index === 0) {
                    link += `?${key}=${value}`
                } else {
                    link += `&${key}=${value}`
                }
                index++
                // console.log(`key: ${key}:, value: ${value}`);
            }
        }
    }

    let homes = await getHomesData(link)
    console.log("homes:", homes)

    const userData = await getUserObj()

    if (homes && searchParams && searchParams.search) {
        homes = homes.filter((home: HomeProps) =>
            Object.values(home).some(
                (value) =>
                typeof value !== "object" &&
                String(searchParams.search) !== "" &&
                String(value).toLowerCase().includes(String(searchParams.search))
            )
        )
        console.log(homes)
    }

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

                <HouseGrid data={homes} userObj={userData} />

            </div>
        </PageWrapper>
    )
}