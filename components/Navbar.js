import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export const Navbar = () =>
{
    const router = useRouter();
    return (
        <>
            <div className={styles.main}>
                <div onClick={() => router.push( '/' )}>Home</div>
                <div onClick={() => router.push( '/authors' )}>Authors</div>
                <div onClick={() => router.push( '/about' )}>About</div>
                <div onClick={() => router.push( '/contact' )}>Contact</div>
                <div onClick={() => ( window.location.href = 'https://www.linkedin.com/in/fahimzada/' )}>Dev LinkedIn</div>
            </div>
            <hr className={styles.line} />
        </>
    )
}
