import { Navbar } from '../../components/Navbar'
import { Filter } from '../../components/Filter'

const NewsHome = () =>
{
    return (
        <>
            <Navbar />
            <Filter />
        </>
    )
}
export default NewsHome

export const getStaticProps = () =>
{
    return {
        props: {}
    }
}