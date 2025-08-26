type InfoCardProps = {
    className?: string;
    card: {
        icon: React.ReactNode;
        heading: string;
        body: string;
    }
    size?: string;
}

export default function InfoCard({ className, card, size, ...rest}: InfoCardProps) {
    return (
        <article className={`flex gap-4 ${className ? className : ""}`} {...rest}>
            <div className={`${size ? size : "size-12"} p-2.5 grid place-items-center bg-c-shape-2 rounded-sm text-c-primary-1 *:size-full`}>
                {card.icon}
            </div>

            <div className="flex-1">
                <h3 className="heading-3">
                    {card.heading}
                </h3>

                <p className="mt-2 body-1">
                    {card.body}
                </p>
            </div>
        </article>
    )
}