/**
 * Developed by - Jay prakash pathak
 * Date - 23rd December 2020
 */

import style from './style.module.scss'
import Link from 'next/link'

let Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.we}>
                <h1>hitechweb</h1>
                <p>
                    Email Id - jayprkshpthk@gmail.com
                    <br />
                    Phone Number - +91 7903672971
                </p>
            </div>
            <div className={style.footerLink}>
                <div className={style.footerCol}>
                    <div className={style.txt}>Projects</div>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>skyway</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>miscos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>highpernova</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>Music Dhoom</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>hipernova</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.footerCol}>
                    <div className={style.txt}>Other important links</div>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Prototyping</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>Founders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>Sitemap</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
