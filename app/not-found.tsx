import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";


export default async function NotFound() {
    return (
        <PageWrapper className="py-30 max-sm:pt-12 max-lg:px-padding-default flex flex-col items-center bg-c-shape-2 text-center">
            <h1 className="mb-10 px-4 text-[12.5rem] max-sm:text-8xl leading-none font-bold text-c-white text-shadow-lg text-shadow-c-black/35 bg-gradient-to-t from-c-primary-1 from-50% to-transparent to-50%">
                Hov!
            </h1>

            <h2 className="mb-4 max-sm:mb-2 heading-2">
                Du er havnet på en side som ikke findes!
            </h2>

            <p className="body-1">
                Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.
            </p>

            <Link href="/" className="mt-10 max-sm:mt-8 button py-4 hover-75">
                Tilbage til forsiden
            </Link>
        </PageWrapper>
    );
}