import Image from "next/image";
import HeroImage from "@/assets/img/hero_house.jpg"
import FamilyPhotoImage from "@/assets/img/familyphoto.jpg"
import BuildingBgImage from "@/assets/img/building_background.jpg"
import iPhonesImage from "@/assets/img/iphones.png"

import { FaGooglePlay, FaApple } from "react-icons/fa6";
import { homeInfoCardsSm, homeInfoCardsLg } from "@/data/homeInfoCards";

import PageWrapper from "@/components/PageWrapper";
import Button from "@/components/Button";

import SectionWrapper from "@/components/homepage/SectionWrapper";
import SectionDefault from "@/components/homepage/SectionDefault";
import InfoCard from "@/components/homepage/InfoCard";

import NewsletterForm from "@/components/forms/NewsletterForm";
import Search from "@/components/forms/Search";

import HouseGrid from "@/components/house/HouseGrid";
import AgentGrid from "@/components/agent/AgentGrid";

import { getAgentsData, getHomesData, getUserObj } from "@/api/fetches";


export default async function Index() {
    const homes = await getHomesData("https://dinmaegler.onrender.com/homes?_limit=4")
    console.log("homes:", homes)

    const agents = await getAgentsData("https://dinmaegler.onrender.com/agents?_limit=3")
    console.log("agents:", agents)

    const userObj = await getUserObj()


    return (
        <PageWrapper className="flex flex-col *:w-full *:self-center">
            <div className="py-48 flex justify-center items-center relative">
                <div className="centered-default lg:px-24 w-full">
                    <h1 className="text-5xl/16 font-bold text-c-white text-center mb-10">Søg efter din drømmebolig</h1>

                    <div className="p-8 bg-c-white rounded-sm">
                        <h4 className="heading-4">
                            Søg blandt 158 boliger til salg i 74 butikker
                        </h4>

                        <hr className="mt-1 mb-5" />

                        <label htmlFor="search" className="pb-1 block body-2">
                            Hvad skal din næste bolig indeholde?
                        </label>

                        <Search>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                                className="size-full p-2.5 border-1 border-c-shape-1 focus:outline-0 placeholder:text-c-body-2"
                            />
                        </Search>
                    </div>
                </div>

                <Image
                    src={HeroImage}
                    alt="Et stort hus"
                    className="size-full object-cover brightness-50 absolute -z-1"
                />
            </div>


            <div className="centered-default py-32">
                <section className="flex max-lg:flex-col max-lg:items-center gap-32 max-lg:gap-12">
                    <div className="relative size-full sm:size-[448px] select-none">
                        <div className="size-full absolute top-8 left-8 z-5 inset-shadow-[0_0_0_12px] inset-shadow-c-primary-1 max-sm:hidden">
                            <div className="p-9 absolute bottom-0 right-0 flex flex-col justify-center items-center gap-2 bg-c-primary-1 text-c-white text-center">
                                <p className="text-6xl font-bold">
                                    38+
                                </p>
                                <p className="text-2xl">
                                    års mægler-<br />erfaring
                                </p>
                            </div>
                        </div>

                        <Image
                            src={FamilyPhotoImage}
                            alt="Glad familie"
                            className="size-full object-cover"
                        />
                    </div>

                    <div className="w-full flex-1">
                        <h2 className="mb-8 heading-1">
                            Vi har fulgt danskerne hjem i snart 4 årtier
                        </h2>

                        <h3 className="mb-3 heading-3">
                            Det synes vi siger noget om os!
                        </h3>
                        <p className="mb-5 body-1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
                        </p>
                        <p className="body-1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-8">
                            {homeInfoCardsLg.map((card, i) =>
                                <InfoCard card={card} size="size-16" key={i} />
                            )}
                        </div>
                    </div>
                </section>


                <hr className="my-16" />


                <div className="grid lg:grid-cols-3 gap-8">
                    {homeInfoCardsSm.map((card, i) =>
                        <InfoCard card={card} key={i} />
                    )}
                </div>
            </div>


            <SectionWrapper bg>
                <SectionDefault obj={{
                    heading: "Udvalgte Boliger",
                    subheading: "There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some",
                    href: "/homes",
                    button: "Se alle boliger"
                }}>
                    {<HouseGrid data={homes} userObj={userObj} />}
                </SectionDefault>
            </SectionWrapper>


            <div className="py-25 flex flex-col justify-center items-center relative">
                <div className="centered-default w-full grid lg:grid-cols-2 items-center gap-8">
                    <h2 className="heading-2 text-c-white">
                        Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
                    </h2>

                    <NewsletterForm />
                </div>
                <figure className="absolute inset-0 -z-1 size-full bg-c-multiply-5">
                    <Image src={BuildingBgImage} alt="Bygninger baggrundsbillede" className="size-full object-cover opacity-25 mix-blend-multiply" />
                </figure>
            </div>


            <SectionWrapper>
                <SectionDefault obj={{
                    heading: "Mød vores engagerede medarbejdere",
                    subheading: "Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.",
                    href: "/agents",
                    button: "Se alle mæglere"
                }}>
                    <AgentGrid data={agents} />
                </SectionDefault>
            </SectionWrapper>


            <div className="flex justify-center items-center bg-c-primary-1">
                <div className="centered-default h-full flex max-lg:flex-col justify-center items-center gap-10">
                    <div className="flex-1 py-24 max-lg:pb-0">
                        <h2 className="mb-5 heading-1 text-c-white">
                            Hold dig opdateret på salgsprocessen
                        </h2>
                        <p className="body-1 text-c-white">
                            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.
                        </p>

                        <div className="mt-6 flex max-sm:flex-col gap-4">
                            <Button href="https://play.google.com/" target="_blank" className="bg-c-white body-button !text-c-primary-1">
                                <FaGooglePlay className="size-6" /> Google Play
                            </Button>

                            <Button href="https://www.apple.com/app-store/" target="_blank" className="body-button inset-shadow-[0_0_0_1px] inset-shadow-c-white">
                                <FaApple className="size-6" /> Apple Store
                            </Button>
                        </div>
                    </div>

                    <Image src={iPhonesImage} alt="2 iPhones" className="lg:mt-20 lg:self-end" />
                </div>
            </div>

        </PageWrapper>
    );
}