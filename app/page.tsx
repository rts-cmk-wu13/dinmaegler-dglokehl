import PageWrapper from "@/components/PageWrapper";


export default function Home() {
    return (
        <PageWrapper>
            <div className="h-[698px] flex justify-center items-center relative">
                <div className="max-w-4xl w-full absolute z-9">
                    <h1 className="text-5xl font-bold text-c-white text-center mb-10">Søg efter din drømmebolig</h1>

                    <div className="p-8 bg-c-white">
                        <h4 className="text-heading-4 text-c-heading-2">
                            Søg blandt 158 boliger til salg i 74 butikker
                        </h4>

                        <hr className="mt-1 mb-5" />

                        <label htmlFor="herosearch" className="mb-1 text-body-2">
                            Hvad skal din næste bolig indeholde?
                        </label>
                        <div className="h-12 flex gap-2.5 text-body-2 *:rounded-xs">
                            <input type="search" name="herosearch" id="herosearch" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" className="w-full p-2.5 border-1 border-c-shape-1 focus:outline-0 placeholder:text-c-body-2" />
                            <input type="submit" value="Søg" className="px-10 bg-c-primary-1 text-c-white cursor-pointer" />
                        </div>
                    </div>
                </div>

                <img src="/hero_house.jpg" alt="" className="size-full object-cover brightness-50" />
            </div>
        </PageWrapper>
    );
}