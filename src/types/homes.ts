import type { DataImagesProps } from "./images";
import type { UserProps } from "./users";

export type HomeProps = {
    energylabel: string;
    type: string;

    images: DataImagesProps[];

    gross: number;
    payment: number;
    price: number;
    city: string;
    cost: number;
    basementsize: number;
    lotsize: number;
    netto: number;
    postalcode: number;
    adress1: string;
    adress2?: string;
    description: string;
    livingspace: number;

    agent: {
        name: string;
        title: string;
        phone: string;
        email: string;
        image: DataImagesProps;
        description: string;
        id: string;
    };

    rooms: string;
    built: number;
    remodel: number;

    floorplan: DataImagesProps;

    lat: number;
    long: number;

    users: UserProps[];

    id: string;
}