import styles from '../styles/Filter.module.css'
import { useRef, useEffect } from 'react'

export const Filter = () =>
{
    const country = useRef()
    const language = useRef()
    const newsType = useRef()

    const userPreferences = () =>
    {
        window.localStorage.setItem( 'country', country.current.value )
        window.localStorage.setItem( 'language', language.current.value )
        window.localStorage.setItem( 'newsType', newsType.current.value )
        alert( "Preferences Saved Successfully :)" )
    }

    const tempPreferences = () =>
    {
        window.location.href = `/news/${country.current.value}/1`
        //Thats how you will link to different end points based on filter 
        //Read components/filtr.js commented code and comments for better understanding 
        // if ( newsType.current.value == 'top-headlines' ) {
        //     window.location.href = `/news/${country.current.value}/1`
        // }
        // else if ( newsType.current.value == 'all-sources' ) {
        //     window.location.href = `/news/${country.current.value}/${language.current.value}`
        // }

    }

    useEffect( () =>
    {
        if ( window.localStorage.getItem( 'country' ) ) {
            country.current.value = window.localStorage.getItem( 'country' )
        }

        if ( window.localStorage.getItem( 'language' ) ) {
            language.current.value = window.localStorage.getItem( 'language' )
        }

        if ( window.localStorage.getItem( 'newsType' ) ) {
            newsType.current.value = window.localStorage.getItem( 'newsType' )
        }

    }, [] )


    return (
        <>
            <h1 className={styles.title}>To The Point News<span>!</span></h1>
            <div className={styles.filter}>
                <label htmlFor="countries" className={styles.selectlabel1}>Countries: </label>
                <select ref={country} id="countries">
                    <option value="ch">Ch</option>
                    <option value="ae">Ae</option>
                    <option value="ar">Ar</option>
                    <option value="at">At</option>
                    <option value="Au">Au</option>
                    <option value="be">Be</option>
                    <option value="bg">Bg</option>
                    <option value="br">Br</option>
                    <option value="ca">Ca</option>
                    <option value="cn">Cn</option>
                    <option value="co">Co</option>
                    <option value="cu">Cu</option>
                    <option value="cz">Cz</option>
                    <option value="de">De</option>
                    <option value="eg">Eg</option>
                    <option value="fr">Fr</option>
                    <option value="gb">Gb</option>
                    <option value="gr">Gr</option>
                    <option value="hk">Hk</option>
                    <option value="hu">Hu</option>
                    <option value="id">Id</option>
                    <option value="ie">Ie</option>
                    <option value="il">Il</option>
                    <option value="in">In</option>
                    <option value="it">It</option>
                    <option value="jp">Jp</option>
                    <option value="kr">Kr</option>
                    <option value="lt">Lt</option>
                    <option value="lv">Lv</option>
                    <option value="ma">Ma</option>
                    <option value="mx">Mx</option>
                    <option value="my">My</option>
                    <option value="ng">Ng</option>
                    <option value="nl">Nl</option>
                    <option value="no">No</option>
                    <option value="nz">Nz</option>
                    <option value="ph">Ph</option>
                    <option value="pl">Pl</option>
                    <option value="pt">Pt</option>
                    <option value="ro">Ro</option>
                    <option value="rs">Rs</option>
                    <option value="ru">Ru</option>
                    <option value="sa">Sa</option>
                    <option value="se">Se</option>
                    <option value="sg">Sg</option>
                    <option value="si">Si</option>
                    <option value="sk">Sk</option>
                    <option value="th">Th</option>
                    <option value="tr">Tr</option>
                    <option value="tw">Tw</option>
                    <option value="ua">Ua</option>
                    <option value="us">Us</option>
                    <option value="ve">Ve</option>
                    <option value="za">Za</option>
                </select>
                <label htmlFor="languages" className={styles.selectlabel2}>Languages: </label>
                <select ref={language} id="languages">
                    <option value="en">En</option>
                    <option value="ar">Ar</option>
                    <option value="de">De</option>
                    <option value="es">Es</option>
                    <option value="fr">Fr</option>
                    <option value="he">He</option>
                    <option value="it">It</option>
                    <option value="nl">Nl</option>
                    <option value="no">No</option>
                    <option value="pt">Pt</option>
                    <option value="ru">Ru</option>
                    <option value="se">Se</option>
                    <option value="ud">Ud</option>
                    <option value="zh">Zh</option>
                </select>
                <label htmlFor="newsType" className={styles.selectlabel3}>News Type: </label>
                <select ref={newsType} id="newsType">
                    <option value="top-headlines">Top headlines</option>
                    <option value="all-sources">All sources</option>
                </select>
                <button onClick={tempPreferences}>Get Me News</button>
                <button onClick={userPreferences}>Save My Preferences</button>
            </div>
        </>
    )
}
