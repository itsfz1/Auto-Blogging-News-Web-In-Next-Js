import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/News.module.css'
import { Navbar } from '../../components/Navbar'
import { Filter } from '../../components/Filter'
import Image from 'next/image'


const News = ( { articles, pageNumber, country } ) =>
{
    const router = useRouter()

    return articles.length ? (
        <>
            <Head>
                <title>To The Point News</title>
                <meta name="description" content='Here goes your description' />
                <meta property="og:image" content={articles[ 0 ]?.urlToImage} />
                <meta property="og:description" content={articles[ 0 ]?.description} />
                <meta property="og:title" content={articles[ 0 ]?.title + ' and more!'} />
                <meta property="twitter:image" content={articles[ 0 ]?.urlToImage} />
                <meta property="twitter:title" content={articles[ 0 ]?.title + ' and more!'} />
                <meta property="twitter:description" content={articles[ 0 ]?.description} />
            </Head>
            <Navbar />
            <Filter />
            <div className="page-container">

                <div className={styles.main}>
                    {articles.map( ( article, index ) => (
                        <div key={index} className={styles.post}>
                            <h1 onClick={() => ( window.open( article.url ) )}>{article.title}</h1>
                            <p>{article.description}</p>
                            {!!article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                        </div>
                    ) )}
                </div>

                <div className={styles.paginator}>
                    <div
                        className={pageNumber === 1 ? styles.disabled : styles.active}
                        onClick={() =>
                        {
                            if ( pageNumber > 1 ) {
                                router.push( `/news/${country}/${pageNumber - 1}` )
                            }
                        }}
                    >
                        Previous Page
                    </div>

                    <div>Page#{pageNumber}</div>

                    <div
                        className={pageNumber === 7 ? styles.disabled : styles.active}
                        onClick={() =>
                        {
                            if ( pageNumber < 7 ) {

                                router.push( `/news/${country}/${pageNumber + 1}` )
                            }
                        }}
                    >
                        Next Page
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className="page-container">
            <div className={styles.main}>
                <h1>Oops! No articles for this page</h1>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>
{
    const permas = pageContext.query
    const pageNumber = permas.perma[ 1 ]
    const country = permas.perma[ 0 ]

    if ( !pageNumber || pageNumber < 1 || pageNumber > 7 ) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch( `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=7&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TPH_PUBLIC_NEWS_KEY}`
            }
        }
    )

    const res = await apiResponse.json()
    const { articles } = res
    return {
        props: {
            articles: articles,
            pageNumber: Number.parseInt( pageNumber ),
            country: country
        }
    }

    //Adjust it to your taste I'm not insterested to get result on query base 
    //Or a subset of news.org topheadlines (all sources)
    //Play with and if you want you can create seperate pages for those end points!

    // let request = ''

    // if ( !isNaN( Number.parseInt( pageNumber ) ) ) {

    //     const pageNumber = permas.perma[ 1 ]
    //     const country = permas.perma[ 0 ]
    //     request = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=7&page=${pageNumber}`

    //     if ( !pageNumber || pageNumber < 1 || pageNumber > 7 ) {
    //         return {
    //             props: {
    //                 articles: [],
    //                 pageNumber: 1
    //             }
    //         }
    //     }
    // } else {
    //     const country = permas.perma[ 0 ]
    //     const language = permas.perma[ 1 ]
    //     request = `https://newsapi.org/v2/top-headlines/sources?country=${country}&language=${language}`
    // }

    // const apiResponse = await fetch(`${request}`,
    //     {
    //         headers: {
    //             Authorization: `Bearer ${process.env.TPH_PUBLIC_NEWS_KEY}`
    //         }
    //     }
    // )

    // const res = await apiResponse.json()
    // const { articles } = res
    // return {
    //     props: {
    //         articles: articles,
    //         pageNumber: Number.parseInt( pageNumber ),
    //         country: country
    //     }
    // }
}

export default News
