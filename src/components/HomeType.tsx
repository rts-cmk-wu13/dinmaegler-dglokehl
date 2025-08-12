"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type HomeTypeProps = {
    className?: string;
};


export default function HomeType({ className, ...rest }: HomeTypeProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        console.log(term)
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('type_eq', `${term}`);
        } else {
            params.delete('type_eq');
        }
        console.log(params)
        replace(`${pathname}?${params}`);
        // window.history.pushState(null, '', `${pathname}?${params}`)
    }

    return (
        <div className={`${className ? className : ""}`} {...rest}>
            <h3 className="mb-1">Ejendomstype</h3>

            <select
                name="type"
                id="type"
                className="p-2.5 w-84 rounded-xs inset-shadow-[0_0_0_1px] inset-shadow-c-shape-1 text-c-body-2"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={String(searchParams.get('type_eq'))}
            >
                <option value=""></option>
                <option value="Ejerlejlighed">Ejerlejlighed</option>
                <option value="Villa">Villa</option>
                <option value="Landejendom">Landejendom</option>
                <option value="Byhus">Byhus</option>
            </select>
        </div>
    );
}
