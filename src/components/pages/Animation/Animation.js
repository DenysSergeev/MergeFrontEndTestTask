import React, { useState } from "react";

import styles from "./Animation.module.scss";

import image from "../../../img/Tokenplace.png";

const AnimationPage = () => {
    const images = [
        { url: "img/Tokenplace.png" },
        { url: "img/FundPlatform.png" },
        { url: "img/Noviscient.png" },
        { url: "img/MergeDataReview.png" },
    ];

    return(
        
        <section className={styles.container}>
            <span className={styles.containerBar}>
                <img src={image} alt={image} />
            </span>
            <div>

            </div>
        </section>
    
    );
}

export default AnimationPage;