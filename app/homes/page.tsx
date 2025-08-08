
import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";

import HouseGrid from "@/components/HouseGrid";
import PriceRange from "@/components/PriceRange";


export default async function Homes() {
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
                        <div>
                            <h3 className="mb-1">
                                Ejendomstype
                            </h3>
                            <select name="type" id="type" className="p-2.5 w-84 rounded-xs inset-shadow-[0_0_0_1px] inset-shadow-c-shape-1 text-c-body-2">
                                <option value="">Ejerlejlighed</option>
                                <option value="">Villa</option>
                                <option value="">Landejendom</option>
                                <option value="">Byhus</option>
                            </select>
                        </div>

                        <div>
                            <h3 className="mb-1 body-2">
                                Pris-interval
                            </h3>
                            <div className="w-135 flex flex-col">
                                <PriceRange />

                                <div className="w-full flex justify-between">
                                    <p className="body-2 text-c-body-2">
                                        0kr.
                                    </p>
                                    <p className="body-2 text-c-body-2">
                                        7.999.000kr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <HouseGrid />

            </div>
        </PageWrapper>
    )
}