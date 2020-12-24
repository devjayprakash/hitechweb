import Link from 'next/link'
import style from './style.module.scss'
import Hamburger from 'hamburger-react'
import { useSpring, animated, useTransition, useChain } from 'react-spring'
import { useEffect, useRef, useState } from 'react'

let NavLinks = [
    {
        key: 1,
        text: 'Home',
        address: '/',
    },
    {
        key: 2,
        text: 'About us',
        address: '/aboutus',
    },
    {
        key: 3,
        text: 'Contact us',
        address: '/',
    },
]

const Navbar = () => {
    let [navOpen, setNavOpen] = useState(true)

    useEffect(() => {
        setNavOpen(window.innerWidth > 600)
    }, [])

    let springRef = useRef()
    let { size, ...rest } = useSpring({
        ref: springRef,

        size: navOpen ? '180px' : '0px',
    })

    const transRef = useRef()

    let transition = useTransition(
        navOpen ? NavLinks : [],
        (item) => item.key,
        {
            ref: transRef,
            unique: true,
            trail: true,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        }
    )

    useChain(navOpen ? [springRef, transRef] : [transRef, springRef], [
        0,
        navOpen ? 0.1 : 0.6,
    ])

    return (
        <nav className={style.navbar}>
            <div className={style.brand}>
                <span>hitechweb</span>
                <div onClick={() => setNavOpen(!navOpen)}>
                    <Hamburger toggled={navOpen} />
                </div>
            </div>
            <animated.ul style={{ ...rest, height: size }}>
                {transition.map(({ item, key, props }) => (
                    <li key={key} style={{ ...props }}>
                        <Link href={item.address}>
                            <a>{item.text}</a>
                        </Link>
                    </li>
                ))}
            </animated.ul>
        </nav>
    )
}

export default Navbar
