import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function cases() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                cases
            </div>
            <Footer />
        </Layout>
    )
}

export default cases