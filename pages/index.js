import { Navbar } from '../components/Navbar'
import { Filter } from '../components/Filter'
import Image from 'next/image'
import homeimage from '../public/home.jpg'

const Home = () =>
{
  return (
    <>
      <Navbar />
      <Filter />
      <Image src={homeimage} layout="responsive" alt='Landing page image representing global news idea' />
    </>
  )
}
export default Home

export const getStaticProps = () =>
{
  return {
    props: {}
  }
}
