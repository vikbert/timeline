import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';

export default function HomeButton() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={'/'}>
                <Fab aria-label="home">
                    <HomeIcon />
                </Fab>
            </Link>
        </Box>
    );
}
