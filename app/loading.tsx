import Spinner from "@/components/Spinner";

export default function loading() {
    return (
        <div className="pt-8 flex justify-center items-center">
            <Spinner />
        </div>
    )
}