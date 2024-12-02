import { NavLink } from "react-router-dom"


export const Logo = () => {
    return (
        <NavLink className="flex items-center gap-2.5 whitespace-nowrap max-w-[295px] w-full" aria-label="Open home page" to="/">
            <svg className="size-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535 549" fill="none">
                <g clipPath="url(#clip0_3_3)">
                    <path d="M385.597 104.789L268.894 305.525H149.894L325.097 -0.00012207L385.597 104.789Z" fill="#4A3AFF" />
                    <path d="M413.847 496.01L298.356 294.573L357.856 191.516L534.847 496.01H413.847Z" fill="#FFD600" />
                    <path d="M60.4999 325L292.695 325.7L352.195 428.757L-6.10352e-05 429.789L60.4999 325Z" fill="#FE6262" />
                </g>
                <defs>
                    <clipPath id="clip0_3_3">
                        <rect width="535" height="549" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="tb-bold xs:text-[30px] text-[24px] text-neutral-800">Superagentur</div>
        </NavLink>

    )
}
