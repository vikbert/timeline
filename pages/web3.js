import MyTimelineWrapper from './components/MyTimelineWrapper';
import HomeButton from './components/HomeButton';
import Hero from './components/hero/Hero';
import Head from 'next/head';
import Footer from './components/Footer';

const items = [
    {
        date: '🔴 Web 1.0',
        title: '1989-2005',
        description: 'While working at CERN(European Organization for Nuclear Research), ' +
            'Sir Tim Berners-Lee developed the World Wide Web in 1989. He got inspired by a problem his colleagues ' +
            'were facing: sharing information from one computer to another was very complicated.' +
            'It was the beginning of web 1.0. ' +
            'Socially people could only view the information provided by the web pages hence this era is ' +
            'also called as “Read-Only Web”',
    }, {
        date: '1990',
        title: 'world\'s first website and server',
        description: 'world\'s first website and server go live at CERN, running on Tim Berners-Lee\'s NeXT computer, ' +
            'which bears the message "This machine is a server. DO NOT POWER DOWN."',
    }, {
        date: '1991',
        title: 'world\'s first webcam',
        description: 'Researchers rig up a live shot of a coffee pot so they could tell from ' +
            'their computer screens when a fresh pot had been brewed. Later connected to the World Wide Web, ' +
            'it becomes the first webcam',
    },{
        date: '1992',
        title: 'surfing the Internet',
        description: 'The term “surfing the internet” is coined and popularized. The line-mode browser launches. ' +
            'It is the first readily accessible browser for the World Wide Web.',
    },{
        date: '1993',
        title: 'WWW to public domain',
        description: 'CERN places its World Wide Web technology in the public domain, donating it to the world.',
    },{
        date: '1994',
        title: 'First real web browser',
        description: 'By the mid-1990s, Netscape Navigator had emerged as the first(or at least the first successful) ' +
            'web browser, pioneering key browser features that are still in use today.',
    },{
        date: '04.1994',
        title: 'Yahoo!',
        description: 'Yahoo! is created by Stanford University graduate students Jerry Yang and David Filo. ' +
            'They originally named the site “Jerry and David’s Guide to the World Wide Web.”',
    },{
        date: '07.1994',
        title: 'Amazon',
        description: 'Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. ' +
            'Amazon.com opens for business, billing itself as the “Earth’s Biggest Bookstore.”',
    },{
        date: '1995',
        title: 'Internet Explorer',
        description: 'Microsoft releases Windows 95 and the first version of Internet Explorer.',
    },{
        date: '1996',
        title: 'Hotmail',
        description: 'HoTMaiL launches as one of the world’s first Webmail services, its name a reference to ' +
            'the HTML internet language used to build webpages.',
    },{
        date: '1997',
        title: 'First Video Hosting Site',
        description: 'The first Internet video hosting site was ShareYourWorld.com.[13] Founded in 1997, ' +
            'it allowed users to upload clips or full videos in different file formats. ShareYourWorld was ' +
            'founded by Chase Norlin, and it ran until 2001, when it closed due to budget and bandwidth problems.',
    },{
        date: '1998',
        title: 'Google',
        description: 'Google was officially launched in 1998 by Larry Page and Sergey Brin to market Google Search, ' +
            'which has become the most used web-based search engine.',
    },{
        date: '1999',
        title: 'Napster',
        description: 'MP3 downloading service Napster launches, overloading high-speed networks in college dormitories.' +
            ' Many colleges ban the service and it is later shut down for enabling the illegal sharing of music files.',
    },{
        date: '1999',
        title: 'Web 2.0 (1999-2012)',
        description: 'The concept of Web 2.0 was coined by Dale Dougherty,\n' +
            'web pioneer and O\'Reilly VP in 2004 with a conference\n' +
            'brainstorming session between O\'Reilly and MediaLive\n' +
            'International. Web 2.0 is also called the wisdom Web,\n' +
            'people-centric Web, participative Web, and read/write Web.',
    },{
        date: '🔴  Web 2.0',
        title: '2001',
        description: 'The real switch from web 1.0 to web 2.0.',
    },{
        date: '15.01.2001',
        title: 'Wikipedia',
        description: 'Wikipedia began with its first edit on 15 January 2001, two days ' +
            'after the domain was registered by Jimmy Wales and Larry Sanger. ',
    },{
        date: '2003',
        title: 'MySpace created',
        description: 'MySpace.com is founded and quickly adopted by musicians seeking to share music and build their fan bases.',
    },{
        date: '2003',
        title: 'iTunes Music Store launched',
        description: 'Apple launches the iTunes Music Store with 200,000 songs at 99¢ each. The store sells one ' +
            'million songs in its first week.',
    },{
        date: '2003',
        title: 'Skype launched',
        description: 'Skype, a voice-over-IP calling and instant messaging service, launches and quickly becomes a ' +
            'verb, as in “Skype me.”',
    },{
        date: '2003',
        title: 'LinkedIn launched',
        description: 'Professional networking site LinkedIn launches.',
    },{
        date: '2003',
        title: 'WordPress created',
        description: 'WordPress blog publishing system created.',
    },{
        date: '2004',
        title: 'Facebook launched',
        description: 'Harvard student Mark Zuckerberg launches thefacebook.com. 1,200 Harvard students sign up within the first 24 hours. Facebook goes on to become the world’s biggest social networking site, ' +
            'with over a billion users worldwide.',
    },{
        date: '01.01.2005',
        title: 'Wiki Spaces created',
        description: '',
    },{
        date: '14.02.2005',
        title: 'YouTube',
        description: 'YouTube is founded on Valentine’s Day. The first video, an explanation of what’s cool about' +
            ' elephants, is uploaded by co-founder Jawed Karim on April 23. Google acquires the company a year later.',
    },{
        date: '10.2005',
        title: 'Web 2.0 summit',
        description: 'The Web 2.0 Summit (originally known as the Web 2.0 Conference) was an annual event, ' +
            'held in San Francisco, California from 2004 to 2011, that featured discussions about the World Wide Web.' +
            'The event was started by Tim O\'Reilly, who is also widely credited with popularizing the term "Web 2.0".',
    },{
        date: '21.03.2006',
        title: 'Twitter launched',
        description: 'Founder Jack Dorsey sends the first tweet: “just setting up my twttr”.',
    },{
        date: '🔴 Web 3.0',
        title: 'Web 3.0 (2006-today)',
        description: 'John Markoff, a New York Times reporter, coined the phrase web 3.0 in 2006.',
    },{
        date: '09.01.2007',
        title: 'First iPhone',
        description: 'January 9, 2007—Apple® introduced iPhone, combining three products—a revolutionary mobile phone, ' +
            'a widescreen iPod® with touch controls, and a breakthrough Internet communications device with ' +
            'desktop-class email, web browsing, searching and maps—into one small and lightweight handheld device.',
    },{
        date: '2008',
        title: 'Apple App Store',
        description: 'Apple launches its App Store with 552 applications.\n',
    },{
        date: '03.2010',
        title: 'Pinterest launched',
        description: 'The development of Pinterest began in December 2009, and the site launched the prototype as ' +
            'a closed beta in March 2010. Nine months after the launch, the website had 10,000 users. ',
    },{
        date: '06.10.2010',
        title: 'Instagram launched on iPhone',
        description: 'Instagram was originally only available for iPhone until 2012',
    },{
        date: '2014',
        title: 'Ethereum & Blockchain 2',
        description: 'Blockchain technology is separated from the currency and its potential for other financial, ' +
            'inter-organisational transactions is explored. Blockchain 2.0 is born, referring to applications ' +
            'beyond currency. Ethereum Blockchain is founded by Crowdsale and it introduces computer programs ' +
            'into the blocks, representing financial instruments such as bonds. These become known as smart contracts.',
    },{
        date: '2015',
        title: 'Ethereum: NFTs And DApps',
        description: 'Ethereum was different with other blockchains that existed only to support ' +
            'specific cryptocurrencies(e.g. Bitcoin). Ethereum was introduced as a platform for ' +
            'running decentralized applications. The Ethereum blockchain holds executable source code ' +
            'in addition to data, so it serves as the foundation for thousands of blockchain-based applications. ' +
            'The Ethereum blockchain’s flexibility makes it ideal for hosting both NFTs and dApps.',
    },{
        date: '2020',
        title: 'Ethereum Merge',
        description: 'n December 2020, Ethereum began running on two parallel blockchains, a legacy one that operates ' +
            'using proof of work (Ethereum Mainnet) and a new chain for proof of stake (Beacon Chain).',
    },];

export default function Web3() {
    return <>
        <HomeButton/>
        <main>
            <Head>
                <title>Web3 History Timeline</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Hero title1={'Web 1.0'} title2={'Web 2.0'} title3={'Web 3.0'}/>

            <MyTimelineWrapper items={items}/>
        </main>

        <Footer/>
    </>;
}
