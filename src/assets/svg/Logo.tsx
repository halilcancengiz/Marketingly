import { NavLink } from "react-router-dom"


export const Logo = () => {
    return (
        <NavLink className="flex items-center gap-2.5 whitespace-nowrap max-w-[295px] w-full" aria-label="Open home page" to="/">
            <svg className="size-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 535 549" fill="none">
                <path d="M385.597 104.789L268.894 305.525L149.894 305.525L325.097 -9.59429e-05L385.597 104.789Z" fill="#3022CD" />
                <path d="M413.847 496.01L298.356 294.573L357.856 191.516L534.847 496.01L413.847 496.01Z" fill="#FFD600" />
                <path d="M60.4999 325L292.695 325.7L352.195 428.757L-5.5531e-05 429.789L60.4999 325Z" fill="#FE6263" />
            </svg>
            <div className="tb-bold xs:text-[30px] text-[24px] text-neutral-800">Superagentur</div>
        </NavLink>

    )
}
