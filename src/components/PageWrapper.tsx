type PageWrapperProps = {
    children: React.ReactNode | null;
    className?: string;
}


export default function PageWrapper({ children, className }: PageWrapperProps) {

    return (
        <div className={`${className ?? ""}`}>
            {children}
        </div>
    )
}