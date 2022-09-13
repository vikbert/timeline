import GlobalStyles from '@mui/material/GlobalStyles';
import Timeline from '@mui/lab/Timeline';
import MyTimeLineItem from './components/MyTimeLineItem';

const items = [
    {
        date: '1991-2008',
        title: 'The first blockchain',
        description: 'Stuart Haber & Scott Stornetta work on the first Blockchain',
    },
    {
        date: '2008',
        title: 'Bitcoin white paper',
        description: 'Satoshi Nakamoto releases bitcoin white paper: Bitcoin: A Peer-to-Peer Electronic Cash System',
    },
    {
        date: '2009',
        title: 'Bitcoin Software SourceForge',
        description: 'Nakamoto released version 0.1 of the Bitcoin Software',
    },
    {
        date: '2010',
        title: 'The first Bitcoin purchase',
        description: 'The first Bitcoin purchase 10,000BTC take place',
    },
    {
        date: '2013',
        title: 'Ethereum White paper',
        description: 'Vitalik Buterin releases Ethereum white paper',
    },
    {
        date: '2014',
        title: 'Ethereum Blockchain',
        description: 'Ethereum Blockchain is founded by Crowdsale',
    },
    {
        date: '2014',
        title: 'NEO Project',
        description: 'Neo Project is launched as antshares by Da Hongfei and Erik Zhang',
    },
    {
        date: '2015',
        title: 'Ethereum second blockchain',
        description: 'Ethereum second blockchain is unveiled',
    },
    {
        date: '2015',
        title: 'Enhancement of Blockchain development',
        description: 'Linux fundation unveils Hyperledger to enhance blockchain development',
    },
    {
        date: '2017',
        title: 'New Blockchain protocol',
        description: 'EOS.io unveiled by block.one as a new blockchain protocol for the deployment of decentralized applications',
    },
];

export default function Blockchain() {
    return <>
        <GlobalStyles styles={{li: {margin: '20px 0'}, p: {color: '#dedede'}}}/>
        <Timeline position="alternate">
            {items.map(function(item, index) {
                return <MyTimeLineItem
                        key={index}
                        date={item.date}
                        title={item.title}
                        description={item.description}/>;
            })}
        </Timeline>
    </>;
}
