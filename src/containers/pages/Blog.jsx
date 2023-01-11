import Helmet_Blog from "components/blog/Helmet"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Blog() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Helmet_Blog />
            <Navbar />
            <div className="pt-28">
                Blog
            </div>
            <Footer />
        </Layout>
    )
}

export default Blog