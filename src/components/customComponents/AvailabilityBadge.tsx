export const AvailabilityBadge = ({text} : any) => {
    return (
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,85,0.15)] mt-10">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_var(--color-primary)]"></span>
            </span>

            <span className="text-xs md:text-sm font-medium text-white tracking-wider uppercase">
                {text}
            </span>
        </div>
    );
};