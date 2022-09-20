import styles from '../../styles/Home.module.css';
import {LinkedIn, GitHub, Twitter, LogoDev} from '@mui/icons-material';

export default function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social}>
            <li>
                <a href={'https://www.linkedin.com/in/xun-zhou-0648772/'} rel={'noreferrer'} target='_blank'>
                    <LinkedIn sx={{fontSize: 24}}/>
                </a>
            </li>
            <li>
                <a href={'https://twitter.com/segentor'} rel={'noreferrer'} target='_blank'>
                    <Twitter sx={{fontSize: 24}}/>
                </a>
            </li>
            <li>
                <a href={'https://vikbert.github.io/'} rel={'noreferrer'} target='_blank'>
                    <GitHub sx={{fontSize: 24}}/>
                </a>
            </li>
            <li>
                <a href={'https://dev.to/vikbert'} rel={'noreferrer'} target='_blank'>
                    <LogoDev sx={{fontSize: 24}} />
                </a>
            </li>
        </ul>
    </footer>);
}