import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Button.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
    children: React.ReactNode;
    url: string,
    className: string,
}

const Button = (props: ButtonProps) => {
    const { children, className, url } = props;
  return (
    <div className={styles[className]}>
        <Link href={url}>
            {children}
            <FontAwesomeIcon icon={faArrowRight} />
        </Link>
    </div>
  )
}

export default Button