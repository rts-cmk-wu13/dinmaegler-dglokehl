type SectionProps = {
    children?: React.ReactNode
    className?: string;
    bg?: boolean;
}


export default function SectionWrapper({ children, className, bg, ...rest}: SectionProps) {
    return (
        <div className={`py-32 pb-60 flex flex-col items-center *:w-full ${bg ? "bg-c-bg-1" : ""} ${className ? className : ""}`} {...rest}>
            {children}
        </div>
    )
}