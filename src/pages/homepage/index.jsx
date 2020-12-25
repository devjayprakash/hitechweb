/**
 * Developed by - Jay praksh pathak
 * Date         - 20th December 2020
 */

import Link from 'next/link'
import Navbar from '../../components/navbar'
import style from './style.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '../../components/layout'

let Homepage = () => {
    return (
        <Layout title={'home | hitechweb'}>
            <TopBanner />
            <WhatWeDo />
            <AppDevByUs />
            <ContactUs />
        </Layout>
    )
}

//--------Contact us section -----------------------------

let ContactUs = () => {
    return (
        <div className={style.contactUs}>
            <div className={style.title}>
                Contact us for any further inforamtion
            </div>
            <div className={style.contactCon}>
                <div className={style.ourCon}>
                    Email id - jayprkshpthk@gmail.com <br /> Phone Number - +91
                    9876543210
                    <br /> <br />
                    <div className={style.or}>
                        or you can fill this form and we will contact you
                    </div>
                    <form action='' className={style.contactUsForm}>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email Id' />
                        <input type='phone' placeholder='Phone number' />
                    </form>
                </div>
            </div>
        </div>
    )
}

//-------Contact us section ends here-----------------------

//--------Application developed by us section starts here----

let projectsData = [
    {
        key: 1,
        title: 'Music Dhoom',
        img: '/images/musicDhoom.PNG',
        decription:
            'Music dhoom is a music player made in JavaFx using SQLite database. It has a stunning ui with performance.',
    },
    {
        key: 2,
        title: 'Highpernova',
        img: '/images/highpernova.png',
        decription:
            'highpernova is a platform which is responsible for sharing study materials among students.',
    },
]

let AppDevByUs = () => {
    const [index, setIndex] = useState(0)

    const onClickRight = () => {
        if (index === projectsData.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const onClickLeft = () => {
        if (index === 0) {
            setIndex(projectsData.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className={style.appdev}>
            <div className={style.title}>
                Let's see some of the applications <br /> we have developed.
            </div>
            <div className={style.content}>
                <Image
                    onClick={() => onClickLeft()}
                    className={style.left}
                    height={50}
                    width={50}
                    src={'/images/icons/next.svg'}
                />
                <div className={style.slider}>
                    <div
                        className={style.sliderImg}
                        style={{
                            backgroundImage: `url("${projectsData[index].img}")`,
                        }}
                    ></div>
                    <div className={style.sliderTxt}>
                        <div className={style.sliderTitle}>
                            {projectsData[index].title}
                        </div>
                        <div className={style.sliderDec}>
                            {projectsData[index].decription}
                        </div>
                        <br />
                        <br />
                        <Link href={'/'}>
                            <a className={style.sliderBtn}>Know more</a>
                        </Link>
                    </div>
                </div>
                <Image
                    className={style.right}
                    height={50}
                    width={50}
                    onClick={() => onClickRight()}
                    src={'/images/icons/next.svg'}
                />
            </div>
        </div>
    )
}

//--------Application developed by us section ends here -----

//---------------What we do section starts here -------------
let WhatWeDoCard = ({ imgAddr, title }) => {
    return (
        <div className={style.card}>
            <Image
                width={70}
                height={70}
                className={style.cardImage}
                src={imgAddr}
                alt={'card image'}
            />
            <div className={style.cardTitle}>{title}</div>
            <Link href={'/'}>
                <a className={style.knowMore}>Know more</a>
            </Link>
        </div>
    )
}

let WhatWeDo = () => {
    return (
        <div className={style.whatwedo}>
            <WhatWeDoCard
                imgAddr={'/images/icons/webAppDev.png'}
                title={'Web Application'}
            />
            <WhatWeDoCard
                imgAddr={'/images/icons/mobileAppDev.png'}
                title={'Mobile Application'}
            />
            <WhatWeDoCard
                imgAddr={'/images/icons/desktopAppDev.png'}
                title={'Desktop Application'}
            />
        </div>
    )
}
//---------------What we do section ends here------------------

//-----------Top banner section starts here-------------------
let TopBanner = () => {
    return (
        <section className={style.topBanner}>
            <div className={style.txtPart}>
                <div className={style.mainTxt}>
                    We make <br />
                    software's that <br />
                    inspires.
                </div>
                <p className={style.dec}>
                    We make websites apps and sofware's to help companies reach
                    there full potential
                </p>
                <br />
                <br />
                <Link href={'/'}>
                    <a className={style.contactUsBtn}>Contact us</a>
                </Link>
            </div>
            <div className={style.bannerImg}></div>
        </section>
    )
}

//--------Top banner section ends here----------------

export default Homepage
