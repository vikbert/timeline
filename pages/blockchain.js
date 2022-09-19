import MyTimelineWrapper from './components/MyTimelineWrapper';
import HomeButton from './components/HomeButton';

const items = [
    {
        date: '1991',
        title: 'The First Blockchain',
        description: 'Blockchain pioneers Scott Stornetta and Stuart Haber work on the first Blockchain and it is' +
            ' described for the first time as a cryptographically secured chain of blocks.',
    }, {
        date: '1998',
        title: 'First Digital Currency',
        description: 'Computer scientist Nick Szabo works on ‘BitGold’, a decentralised digital currency. Bit gold' +
            ' was never implemented, but has been called "a direct precursor to the Bitcoin architecture."',
    }, {
        date: '2001',
        title: 'SHA-2(secure hash algorithm 2) by NSA',
        description: 'SHA-2 (Secure Hash Algorithm 2) is a set of cryptographic hash functions designed by ' +
            'the United States National Security Agency (NSA) and first published in 2001.',
    }, {
        date: '2008', title: 'Bitcoin white paper', description: 'Satoshi Nakamoto releases bitcoin white ' +
            'paper: Bitcoin: A Peer-to-Peer Electronic Cash System, that establishes the model for a blockchain.',
    }, {
        date: '2008-2009',
        title: 'First Bitcoin Software',
        description: 'Nakamoto uploaded blockchain source code to SourceForge in 2008, so software developers ' +
            'around the world could contribute to this project. Nakamoto released version 0.1 of ' +
            'the Bitcoin Software, that is the first' + ' blockchain as the public ledger for transactions ' +
            'made using bitcoin.',
    }, {
        date: '22.05.2010', title: 'The first Bitcoin Purchase', description: 'On 22.05.2010, Laszlo Hanyecz ' +
            'negotiated to pay 10,000 BTC for two Papa John\'s pizzas priced at about $25. The date is now ' +
            'celebrated in the crypto calendar' +
            ' as "Bitcoin Pizza Day."',
    }, {
        date: '2013', title: 'Ethereum & Smart Contract', description: 'Vitalik Buterin released Ethereum ' +
            'white paper with the title "A NEXT GENERATION SMART CONTRACT & DECENTRALIZED APPLICATION PLATFORM".',
    },{
        date: '2013', title: 'Ethereum as decentralized platform', description: 'Ethereum introduced blockchain\n' +
            'in the form of “a decentralized platform that runs smart\n' +
            'contracts.” It explained that\n' +
            'blockchain “enables developers to create markets, store\n' +
            'registries of debts or promises, move funds in accordance with instructions given\n' +
            'long in the past (like a will or\n' +
            'a futures contract) and many\n' +
            'other things that have not\n' +
            'been invented yet, all without\n' +
            'a middleman or counterparty\n' +
            'risk.”',
    }, {
        date: '2014',
        title: 'Ethereum & Blockchain 2',
        description: 'Blockchain technology is separated from the currency and its potential for other financial, ' +
            'inter-organisational transactions is explored. Blockchain 2.0 is born, referring to applications beyond ' +
            'currency. Ethereum' + ' Blockchain is founded by Crowdsale and it introduces computer programs into ' +
            'the blocks, representing financial instruments such as bonds. These become known as smart contracts.',
    }, {
        date: '2014', title: 'NEO Project', description: 'Neo Project is launched as antshares by Da Hongfei ' +
            'and Erik Zhang',
    }, {
        date: '2015',
        title: 'Ethereum: NFTs and dApps',
        description: 'Ethereum was different with other blockchains that existed only to support specific ' +
            'cryptocurrencies(e.g. Bitcoin). Ethereum was introduced as a platform for running decentralized ' +
            'applications. The Ethereum' + ' blockchain' + ' holds executable' + ' source code in addition to ' +
            'data, so it serves as the foundation for thousands of blockchain-based applications. ' +
            'The Ethereum blockchain’s flexibility makes it ideal for hosting both NFTs and dApps.',
    }, {
        date: '2015', title: 'Enhancement of Blockchain development', description: 'Linux fundation unveils ' +
            'Hyperledger to enhance blockchain development',
    }, {
        date: '2017', title: 'New Blockchain protocol', description: 'EOS.io unveiled by block.one as a new' +
            ' blockchain protocol for the deployment of decentralized applications',
    }, {
        date: '2018', title: '10 years blockchain', description: 'Bitcoin turned 10 in the year 2018. ' +
            'The bitcoin value continued to drop, reaching the value of $3,800 at the end of the year. ' +
            'Online platforms like Google, Twitter, ' +
            'and Facebook banned the advertising of cryptocurrencies.',
    }, {
        date: '2019', title: 'Amazon Managed Blockchain', description: 'Ethereum network ' +
            'transactions exceeded 1 million per day. Amazon announced the general availability of ' +
            'the Amazon Managed Blockchain service on AWS.',
    }, {
        date: '2020', title: 'Ethereum Merge', description: 'In December 2020, Ethereum began running on two ' +
            'parallel blockchains, a legacy one that operates using proof of work (Ethereum Mainnet) and ' +
            'a new chain for proof of stake (Beacon Chain). The merge combined Ethereum’s Mainnet ' +
            'and Beacon Chain into one unified blockchain operating on a proof of stake protocol. ' +
            'Their eventual merge was expected to be called Ethereum 2.0.',
    }];

export default function Blockchain() {
    return <>
        <HomeButton/>
        <MyTimelineWrapper items={items}/>
    </>;
}
