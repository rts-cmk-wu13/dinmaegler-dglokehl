import type { HomeProps } from "@/types/homes";
import { IoImageOutline, IoLayersOutline, IoLocationOutline, IoHeartOutline } from "react-icons/io5";

import PageWrapper from "@/components/PageWrapper";
import AgentContact from "@/components/AgentContact";


interface ParamsProps {
    params: {
        id: string;
    };
}


export default async function Home({ params }: ParamsProps) {
    const { id } = await params;

    const data = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
    const home: HomeProps = await data.json()
    console.log(home)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <img src={home.images[0].url} alt="" className="w-full h-195 object-cover" />

            <div className="pt-10 pb-60 max-w-maxw-default">
                <div className="flex justify-between">
                    <div className="heading-4">
                        <h1>
                            {home.adress1}
                        </h1>
                        <h2>
                            {home.postalcode} {home.city}
                        </h2>
                    </div>

                    <ul className="flex justify-center items-center gap-12 *:*:size-12 *:*:cursor-pointer">
                        <li>
                            <IoImageOutline />
                        </li>
                        <li>
                            <IoLayersOutline />
                        </li>
                        <li>
                            <IoLocationOutline />
                        </li>
                        <li>
                            <IoHeartOutline />
                        </li>
                    </ul>

                    <h2 className="heading-2">
                        Kr. {home.price}
                    </h2>
                </div>


                <hr className="my-8 border-c-shape-1" />


                <div className="grid grid-cols-3 gap-8 body-2 *:w-full *:*:grid *:*:grid-cols-2 *:*:gap-x-8 *:*:wrap-break-word">
                    <ul>
                        <li>
                            Sagsnummer: <span>123456789</span>
                        </li>
                        <li>
                            Boligareal: <span>{home.livingspace} m²</span>
                        </li>
                        <li>
                            Grundareal: <span>{home.lotsize} m²</span>
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
                            Kælder: <span>{home.basementsize}</span>
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
                            Udbetaling: <span>{home.payment}</span>
                        </li>
                        <li>
                            Brutto ex ejerudgift: <span>{home.gross}</span>
                        </li>
                        <li>
                            Netto ex ejerudgift: <span>{home.netto}</span>
                        </li>
                        <li>
                            Ejerudgifter: <span>{home.cost}</span>
                        </li>
                    </ul>
                </div>


                <div className="mt-20 flex justify-between gap-10 *:*:first:mb-5">
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
                        <AgentContact agent={home.agent} className="p-10 pr-24" />
                    </section>
                </div>
            </div>
        </PageWrapper>
    )
}