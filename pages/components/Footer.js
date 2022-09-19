import styles from '../../styles/Home.module.css';
import {LinkedIn, GitHub, Twitter, LogoDev} from '@mui/icons-material';

export default function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social}>
            <li>
                <a href={'https://www.linkedin.com/in/xun-zhou-0648772/'} target='_blank'>
                    <LinkedIn sx={{fontSize: 40}}/>
                </a>
            </li>
            <li>
                <a href={'https://twitter.com/segentor'} target='_blank'>
                    <Twitter sx={{fontSize: 40}}/>
                </a>
            </li>
            <li>
                <a href={'https://vikbert.github.io/'} target={'_blank'}>
                    <GitHub sx={{fontSize: 40}}/>
                </a>
            </li>
            <li>
                <a href={'https://dev.to/vikbert'} target={'_blank'}>
                    <LogoDev sx={{fontSize: 40}} target={'_blank'}/>
                </a>
            </li>
        </ul>
    </footer>);
}