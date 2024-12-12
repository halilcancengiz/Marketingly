import { NavLink } from "react-router-dom"


export const Logo = () => {
    return (
        <NavLink className="flex items-center gap-2.5 whitespace-nowrap max-w-[295px] w-full" aria-label="Open home page" to="/">
            <svg width="300" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 100" fill="none">
                <g transform="translate(0, 10) scale(0.17)">
                    <path d="M385.597 104.789L268.894 305.525H149.894L325.097 -0.00012207L385.597 104.789Z" fill="#4A3AFF" />
                    <path d="M413.847 496.01L298.356 294.573L357.856 191.516L534.847 496.01H413.847Z" fill="#FFD600" />
                    <path d="M60.4999 325L292.695 325.7L352.195 428.757L-6.10352e-05 429.789L60.4999 325Z" fill="#FE6262" />
                </g>
                <text className="tb-medium" x="100" y="60" fontFamily="Arial, sans-serif" fontSize="70" fill="#2B2B2B" fontWeight="bold" alignmentBaseline="middle">Superagentur</text>
            </svg>
        </NavLink>

    )
}
