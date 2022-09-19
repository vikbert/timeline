import MyTimelineWrapper from './components/MyTimelineWrapper';

const items = [
    {
        date: '1991-2008',
        title: 'The first blockchain',
        description: 'Blockchain pioneers Scott Stornetta and Stuart Haber work on the first Blockchain and it is described for the first time as a cryptographically secured chain of blocks.',
    }, {
        date: '1998',
        title: 'First digital currency',
        description: 'Computer scientist Nick Szabo works on ‘BitGold’, a decentralised digital currency. Bit gold was never implemented, but has been called "a direct precursor to the Bitcoin architecture."',
    }, {
        date: '2001',
        title: 'SHA-2(secure hash algorithm 2) by NSA',
        description: 'SHA-2 (Secure Hash Algorithm 2) is a set of cryptographic hash functions designed by the United States National Security Agency (NSA) and first published in 2001.',
    }, {
        date: '2008', title: 'Bitcoin white paper', description: 'Satoshi Nakamoto releases bitcoin white paper: Bitcoin: A Peer-to-Peer Electronic Cash System, that establishes the model for a blockchain',
    }, {
        date: '2009',
        title: 'Bitcoin Software SourceForge',
        description: 'Nakamoto uploaded blockchain source code to SourceForge in 2008, so software developers around the world could contribute to this project. Nakamoto released version 0.1 of the Bitcoin Software, that is the first' + ' blockchain as the public ledger for transactions made using bitcoin',
    }, {
        date: '2010', title: 'The first Bitcoin purchase', description: 'The first Bitcoin purchase 10,000BTC take place',
    }, {
        date: '2013', title: 'Ethereum White paper', description: 'Vitalik Buterin releases Ethereum white paper',
    }, {
        date: '2014',
        title: 'Ethereum & Blockchain 2',
        description: 'Blockchain technology is separated from the currency and its potential for other financial, interorganisational transactions is explored. Blockchain 2.0 is born, referring to applications beyond currency. Ethereum' + ' Blockchain is founded by Crowdsale and it introduces computer programs into the blocks, representing financial instruments such as bonds. These become known as smart contracts.',
    }, {
        date: '2014', title: 'NEO Project', description: 'Neo Project is launched as antshares by Da Hongfei and Erik Zhang',
    }, {
        date: '2015',
        title: 'Ethereum: NFTs and dApps',
        description: 'Ethereum was different with other blockchains that existed only to support specific cryptocurrencies(e.g. Bitcoin). Ethereum was introduced as a platform for running decentralized applications. The Ethereum' + ' blockchain' + ' holds executable' + ' source code in addition to data, so it serves as the foundation for thousands of blockchain-based applications. The Ethereum blockchain’s flexibility makes it ideal for hosting both NFTs and dApps.',
    }, {
        date: '2015', title: 'Enhancement of Blockchain development', description: 'Linux fundation unveils Hyperledger to enhance blockchain development',
    }, {
        date: '2017', title: 'New Blockchain protocol', description: 'EOS.io unveiled by block.one as a new blockchain protocol for the deployment of decentralized applications',
    }];

export default function Blockchain() {
    return <>
        <MyTimelineWrapper items={items}/>
    </>;
}
