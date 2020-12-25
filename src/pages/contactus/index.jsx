import Layout from '../../components/layout'
import style from './style.module.scss'

let ContactUs = () => {
    return (
        <Layout>
            <div className={style.contactUsPage}>
                <div className={style.contactUsTxt}>
                    <h1>Contact us :-</h1>
                    <p>Really hopeing for a great journey</p>
                    <br />
                    <hr />
                    <p>
                        You can contact us here :- <br />
                        Email id - jayprkshpthk@gmail.com <br /> Phone number -
                        +91 9876543210
                        <hr />
                        <br />
                        or you can fill this form
                    </p>

                    <form action='/'>
                        <input type='text' placeholder='Name' /> <br />
                        <input type='email' placeholder='Email' /> <br />
                        <input type='phone' placeholder={'phone'} /> <br />
                        <button>Submit</button>
                    </form>
                </div>
                <div className={style.contactImg}></div>
            </div>
        </Layout>
    )
}

export default ContactUs
