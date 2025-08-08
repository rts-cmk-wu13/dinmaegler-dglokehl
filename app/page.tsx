import Link from "next/link";

import { FaHouseLaptop, FaHouseMedical, FaLocationDot, FaUsersBetweenLines, FaArrowRightLong, FaGooglePlay, FaApple } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";

import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import SectionDefault from "@/components/SectionDefault";

import HouseGrid from "@/components/HouseGrid";
import AgentGrid from "@/components/AgentGrid";


export default async function Index() {
    const data = await fetch('https://dinmaegler.onrender.com/homes')
    const posts = await data.json()
    console.log(posts)

    const homes = []
    for (let i = 0; i < 4; i++) {
        homes.push(posts[i])
    }
    return (
        <PageWrapper className="flex flex-col *:w-full *:self-center">
            <div className="h-[698px] flex justify-center items-center relative">
                <div className="max-w-4xl w-full absolute z-9">
                    <h1 className="text-5xl font-bold text-c-white text-center mb-10">Søg efter din drømmebolig</h1>

                    <div className="p-8 bg-c-white">
                        <h4 className="heading-4">
                            Søg blandt 158 boliger til salg i 74 butikker
                        </h4>

                        <hr className="mt-1 mb-5" />

                        <label htmlFor="herosearch" className="pb-1 block body-2">
                            Hvad skal din næste bolig indeholde?
                        </label>
                        <div className="h-12 flex gap-2.5 body-2 *:rounded-xs">
                            <input type="search" name="herosearch" id="herosearch" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" className="w-full p-2.5 border-1 border-c-shape-1 focus:outline-0 placeholder:text-c-body-2" />
                            <input type="submit" value="Søg" className="button px-10" />
                        </div>
                    </div>
                </div>

                <img src="/hero_house.jpg" alt="" className="size-full object-cover brightness-50" />
            </div>


            <div className="py-32 max-w-maxw-default">
                <section className="flex gap-32">
                    <div className="relative size-[448px]">
                        <div className="absolute top-8 left-8 z-9 size-full">
                            <div className="size-full relative inset-shadow-[0_0_0_12px] inset-shadow-c-primary-1">
                                <div className="size-[210px] absolute bottom-0 flex flex-col justify-center items-center gap-2 right-0 bg-c-primary-1 text-c-white text-center">
                                    <p className="text-6xl font-bold">
                                        38+
                                    </p>
                                    <p className="text-2xl">
                                        års mægler-<br />erfaring
                                    </p>
                                </div>
                            </div>
                        </div>

                        <img src="/familyphoto.jpg" alt="" className="size-full object-cover" />
                    </div>

                    <div className="w-full flex-1">
                        <h2 className="mb-8 heading-1">
                            Vi har fulgt danskerne hjem i snart 4 årtier
                        </h2>

                        <h3 className="mb-3 heading-3 text-c-primary-1">
                            Det synes vi siger noget om os!
                        </h3>
                        <p className="mb-5 body-1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
                        </p>
                        <p className="body-1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <div className="mt-10 flex justify-between items-center">
                            <div className="flex gap-5">
                                <div className="size-16 grid place-items-center bg-c-shape-2">
                                    <FaHouseLaptop className="size-10 text-c-primary-1" />
                                </div>
                                <div>
                                    <h3 className="heading-3">
                                        4829
                                    </h3>
                                    <p className="body-1">
                                        boliger solgt
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="size-16 grid place-items-center bg-c-shape-2">
                                    <FaHouseMedical className="size-10 text-c-primary-1" />
                                </div>
                                <div>
                                    <h3 className="heading-3">
                                        158
                                    </h3>
                                    <p className="body-1">
                                        boliger til salg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <hr className="my-16" />


                <div className="grid grid-cols-3 gap-8">
                    <article className="flex gap-3">
                        <div className="size-12 grid place-items-center bg-c-shape-2">
                            <BsBuildingsFill className="size-9 text-c-primary-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="heading-3">
                                Bestil et salgstjek
                            </h3>
                            <p className="mt-4 body-1">
                                Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-3">
                        <div className="size-12 grid place-items-center bg-c-shape-2">
                            <FaLocationDot className="size-9 text-c-primary-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="heading-3">
                                74 butikker
                            </h3>
                            <p className="mt-4 body-1">
                                Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-3">
                        <div className="size-12 grid place-items-center bg-c-shape-2">
                            <FaUsersBetweenLines className="size-9 text-c-primary-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="heading-3">
                                Tilmeld køberkartotek
                            </h3>
                            <p className="mt-4 body-1">
                                Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
                            </p>
                        </div>
                    </article>
                </div>
            </div>


            <SectionWrapper bg>
                <SectionDefault obj={{
                    heading: "Udvalgte Boliger",
                    subheading: "There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some",
                    href: "/homes",
                    button: "Se alle boliger"
                }}>
                    <HouseGrid amount={4} />
                </SectionDefault>
            </SectionWrapper>


            <div className="h-72 flex flex-col justify-center items-center relative">
                <div className="max-w-maxw-default w-full grid grid-cols-2 items-center gap-8 absolute z-9">
                    <h2 className="heading-2 text-c-white">
                        Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
                    </h2>

                    <div className="w-full flex items-center relative">
                        <FaArrowRightLong className="w-7 h-auto absolute right-6 z-2" />
                        <input type="text" name="newsletter" id="newsletter" placeholder="Indtast din email adresse" className="p-6 w-full bg-c-white rounded-sm" />
                    </div>
                </div>
                <figure className="size-full bg-c-multiply-5">
                    <img src="/building_background.jpg" alt="" className="size-full object-cover opacity-25 mix-blend-multiply" />
                </figure>
            </div>


            <SectionWrapper>
                <SectionDefault obj={{
                    heading: "Mød vores engagerede medarbejdere",
                    subheading: "Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.",
                    href: "/agents",
                    button: "Se alle mæglere"
                }}>
                    <AgentGrid amount={3} />
                </SectionDefault>
            </SectionWrapper>


            <div className="h-128 flex justify-center items-center bg-c-primary-1">
                <div className="max-w-maxw-default h-full flex justify-center items-center gap-10">
                    <div className="flex-1">
                        <h2 className="mb-5 heading-1 text-c-white">
                            Hold dig opdateret på salgsprocessen
                        </h2>
                        <p className="body-1 text-c-white">
                            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link href="https://play.google.com/" target="_blank" className="px-8 py-4 size-fit flex items-center justify-center gap-1 bg-c-white text-button rounded-xs">
                                <FaGooglePlay className="size-6" /> Google Play
                            </Link>

                            <Link href="https://www.apple.com/app-store/" target="_blank" className="px-8 py-4 size-fit flex items-center justify-center gap-1 text-button text-c-white rounded-xs inset-shadow-[0_0_0_1px] inset-shadow-c-white">
                                <FaApple className="size-6" /> Apple Store
                            </Link>
                        </div>
                    </div>

                    <img src="/iphones.png" alt="" className="self-end" />
                </div>
            </div>

        </PageWrapper>
    );
}