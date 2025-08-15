import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import FavoriteCard from "@/components/FavoriteCard";


import { getUserObj } from "@/utils/helpers";


export default async function Favorites() {
    const userObj = await getUserObj()

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Mine favoritboliger" />

            <div className="max-w-maxw-default py-24">
                <div className="flex flex-col gap-10">
                    {userObj && userObj.userData.homes.map(async (homeId: string) => {
                        const data = await fetch(`https://dinmaegler.onrender.com/homes/${homeId}`)
                        const home = await data.json()
                        console.log("home:", home)

                        return <FavoriteCard home={home} userObj={userObj} />
                    })}
                </div>
            </div>
        </PageWrapper>
    )
}