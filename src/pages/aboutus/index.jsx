import Layout from '../../components/layout'
import style from './style.module.scss'

/**
 * Developed by - Jay prakash pathak
 * Date - 24th of december 2020
 */

//----our core concepts section starts here----------------

let CoreConcepts = () => {
    return (
        <div
            className={style.mission}
            style={{
                display: 'flex',
            }}
        >
            <div style={{ width: '50%' }}>
                <h1>
                    Some of the core concepts on which we work are as follows:-
                </h1>
                <p>
                    <ul>
                        <li>
                            We always use the top web technologies to develop
                            websites and apps so that you can get the top
                            peformance possible and also the best looks.
                        </li>
                        <li>
                            We focus a lot on detail and we develop everything
                            from sratch so that a good and stable quality can be
                            achieved.
                        </li>
                        <li>
                            We give a very high attention to user interface and
                            user experience as all these things fianlly
                            contribute to the user ingagement.
                        </li>
                        <li>
                            Our core mission is to solve your technological
                            problems and we will always do our best to achieve
                            so.
                        </li>
                        <li>We gaurentee a full</li>
                    </ul>
                </p>
            </div>
            <div
                style={{
                    width: '50%',
                    backgroundImage: `url("/images/illustrator.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
        </div>
    )
}

//-------our core concepts section ends here-------------

//---------our goal section starts here -------------

let OurGoal = () => {
    return (
        <div className={style.mission}>
            <h1>Our Mission</h1>
            <p>
                Our mission is to provide the correct set of technologies to the
                companies so that they can do there work in full potential and
                suceed in their mission. We build high quality web , dektop and
                mobile application and we also do prototyping in the most
                professional and high tech ways. We believe that the world is
                better place if we share our knowledge and experience so we also
                run a youtube channel so that young developers can learn how to
                code and create what they want. If you also want to to join us
                then we will become strong and we can achieve every impossible.
                <br />
                Thank you
            </p>
        </div>
    )
}

//--------our goal setion ends here-----------------

//-------top banner part start's here ----------
let TopBannerPart = () => {
    return (
        <div className={style.topBanner}>
            <div className={style.pageTxt}>
                <div className={style.pageTitle}>
                    We are a team of explorer's and problem solvers.
                </div>
                <div className={style.pageDecription}>
                    We develop high quality web apps , desktop apps and mobile
                    apps so that your company can grow and achieve its max
                    potential.
                </div>
                <div className={style.pageBtn}>conatct us</div>
            </div>
            <div className={style.topImage}></div>
        </div>
    )
}
//-------top banner part end's here-----------

let AboutUs = () => {
    return (
        <Layout title={'about | hitechweb'}>
            <TopBannerPart />
            <OurGoal />\
            <CoreConcepts />
        </Layout>
    )
}

export default AboutUs
