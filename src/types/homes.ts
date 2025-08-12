import type { DataImagesProps } from "./images";


type UserProps = {
    confirmed: boolean;
    blocked: boolean;

    homes: string[];

    username: string;
    email: number;
    role: number;
    id: number;
}


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