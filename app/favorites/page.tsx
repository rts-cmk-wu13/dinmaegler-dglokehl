import PageWrapper from "@/components/PageWrapper";
import PageHeading from "@/components/PageHeading";
import FavoritesList from "./components/FavoritesList";

import { getHomesData, getUserObj } from "@/api/fetches";

export const metadata = {
    title: 'Mine favoritter',
}


export default async function Favorites() {
    const userObj = await getUserObj()
    const homes = await getHomesData("https://dinmaegler.onrender.com/homes")

    const homeArr = homes.filter((home) =>
        Object.values(home.users).some(
            (user) =>
            user.id === userObj?.userData.id
        )
    )
    console.log("filtered:", homeArr)

    return (
        <PageWrapper className="flex flex-col justify-center items-center *:w-full">
            <PageHeading heading="Mine favoritboliger" />

            {homeArr && userObj && <FavoritesList homes={homeArr} userObj={userObj} />}
        </PageWrapper>
    )
}