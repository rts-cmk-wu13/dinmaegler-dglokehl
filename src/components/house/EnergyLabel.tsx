type EnergyLabelProps = {
    label?: string;
    className?: string;
}

export default function EnergyLabel({ label, className, ...rest}: EnergyLabelProps) {
    let labelColor = "bg-c-primary-1"
    if (label === "A") {
        labelColor = "bg-c-primary-4"
    }
    if (label === "B") {
        labelColor = "bg-c-yellow"
    }
    if (label === "C") {
        labelColor = "bg-c-orange"
    }
    if (label === "D") {
        labelColor = "bg-c-red"
    }

    return (
        <div className={`size-7.5 body-6 text-c-white text-center ${labelColor} ${className ? className : ""}`} {...rest}>
            <p>{label}</p>
        </div>
    )
}