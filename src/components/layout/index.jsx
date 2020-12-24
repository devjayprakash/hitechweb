import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head'

let Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title ? title : 'hitechweb'}</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
