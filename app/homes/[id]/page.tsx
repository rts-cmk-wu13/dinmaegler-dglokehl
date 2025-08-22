import PageWrapper from "@/components/PageWrapper";
import AgentContact from "@/components/agent/AgentContact";
import HouseLightbox from "@/components/house/HouseLightbox";

import { getHomeData, getUserObj } from "@/api/fetches";
import { formatPrice, formatRemoveDecimals } from "@/utils/helpers";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data = await fetch(`https://dinmaegler.onrender.com/homes/${id}`).then((res) =>
        res.json()
    )

    return {
        title: data.adress1
    }
}


interface ParamsProps {
    params: {
        id: string;
    };
}

export default async function Home({ params }: ParamsProps) {
    const { id } = await params;

    const home = await getHomeData(id)
    console.log("home:", home)

    const userObj = await getUserObj()

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <HouseLightbox userObj={userObj} home={home} />

            <div className="pt-10 pb-60 max-w-maxw-default">

                <hr className="my-8 border-c-shape-1" />


                <div className="grid lg:grid-cols-3 max-lg:*:*:text-right  max-lg:[&_span]:text-left gap-8 body-2 *:w-full *:*:grid *:*:grid-cols-2 *:*:gap-x-8 *:*:wrap-break-word">
                    <ul>
                        <li>
                            Sagsnummer: <span>123456789</span>
                        </li>
                        <li>
                            Boligareal: <span>{formatRemoveDecimals(home.livingspace)} m²</span>
                        </li>
                        <li>
                            Grundareal: <span>{formatRemoveDecimals(home.lotsize)} m²</span>
                        </li>
                        <li>
                            Rum/værelser: <span>{home.rooms}</span>
                        </li>
                        <li>
                            Antal Plan: <span>???</span>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            Kælder: <span>{formatRemoveDecimals(home.basementsize)}</span>
                        </li>
                        <li>
                            Byggeår: <span>{home.built}</span>
                        </li>
                        <li>
                            Ombygget: <span>{home.remodel}</span>
                        </li>
                        <li>
                            Energimærke: <span>{home.energylabel}</span>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            Udbetaling: <span>{formatPrice(home.payment)} kr.</span>
                        </li>
                        <li>
                            Brutto ex ejerudgift: <span>{formatPrice(home.gross)} kr.</span>
                        </li>
                        <li>
                            Netto ex ejerudgift: <span>{formatPrice(home.netto)} kr.</span>
                        </li>
                        <li>
                            Ejerudgifter: <span>{formatPrice(home.cost)} kr.</span>
                        </li>
                    </ul>
                </div>


                <div className="mt-20 flex max-lg:flex-col justify-between gap-10 *:*:first:mb-5">
                    <section className="flex-1">
                        <h2 className="heading-3">
                            Beskrivelse:
                        </h2>
                        <p>
                            {home.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="heading-3">
                            Ansvarlig mægler:
                        </h2>
                        <AgentContact agent={home.agent} className="p-10 pr-24 inset-shadow-default" />
                    </section>
                </div>
            </div>
        </PageWrapper>
    )
}