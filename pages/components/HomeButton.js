import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';

export default function HomeButton() {
    const style = {
        top: '0',
        position: 'fixed',
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={'/'}>
                <Fab aria-label="home" style={style}>
                    <HomeIcon />
                </Fab>
            </Link>
        </Box>
    );
}
