import React, { ReactNode } from "react"
import style from "./footer.module.scss" 

type footerPropsType = {
    data:string,
    
}

function Footer(props:footerPropsType) {
    const {data} = props
    return(
        <footer className={style.footer_box}>
            <h1>Footer</h1>
        </footer>
    )
}

export default Footer;
