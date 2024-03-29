import { Box } from "@mui/material"
import React from "react"

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
    const title_style = {
        fontFamily: "Teko",
        fontSize: "12vw",
        background: "linear-gradient(#612f65, #653061,  #6a315e,#853948, #c14918, #d54f07)",
        WebkitBackgroundClip: "text",
        backgroundPosition: "0% 100%",
        color: "transparent",
        margin: 0,
        height: "14vw",
    }

    return (
        <Box sx={{ flexDirection: "row", alignItems: "end", width: "100%", height: "30%" }}>
            <p style={{ ...title_style, margin: 0 }}>t</p>
            {/* <h1 style={{ fontFamily: "Lucidity" }}>ainara</h1> */}
            <p style={{ ...title_style }}>s</p>
            {/* <h1 style={{ fontFamily: "Lucidity" }}>ilva</h1> */}
            <p style={{ ...title_style }}>.</p>
        </Box>
    )
}
