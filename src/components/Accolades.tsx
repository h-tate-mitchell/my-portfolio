import React from 'react'
import styles from '@/styles/Accolades.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

// type AccoladesProps = {
//     children: React.ReactNode;
// }

const Accolades = () => {
    // const { children } = props;
    return (
        <div className={styles.accolades}>
                <div className={styles.badge}>
                    <FontAwesomeIcon icon={faMedal} />
                    <p>Upgraded analytics solutions for 130+ clients</p>
                </div>
                <div className={styles.badge}>
                    <FontAwesomeIcon icon={faMedal} />
                    <p>Upgraded analytics solutions for 130+ clients</p>
                </div>
                <div className={styles.badge}>
                    <FontAwesomeIcon icon={faMedal} />
                    <p>Upgraded analytics solutions for 130+ clients</p>
                </div>
        </div>
    )
}

export default Accolades