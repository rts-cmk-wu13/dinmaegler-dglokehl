import { FaHouseLaptop, FaHouseMedical, FaLocationDot, FaUsersBetweenLines } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";

export const homeInfoCardsSm = [
    {
        icon: <BsBuildingsFill />,
        heading: "Bestil et salgstjek",
        body: "Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.",
    },
    {
        icon: <FaLocationDot />,
        heading: "74 butikker",
        body: "Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.",
    },
    {
        icon: <FaUsersBetweenLines />,
        heading: "Tilmeld køberkartotek",
        body: "Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.",
    }
]

export const homeInfoCardsLg = [
    {
        icon: <FaHouseLaptop />,
        heading: "4829",
        body: "boliger solgt",
    },
    {
        icon: <FaHouseMedical />,
        heading: "158",
        body: "boliger til salg",
    }
]