import MyTimelineWrapper from './components/MyTimelineWrapper';
import HomeButton from './components/HomeButton';
import Hero from './components/hero/Hero';
import Head from 'next/head';
import Footer from './components/Footer';

const items = [
    {
        date: 'Jun 1995',
        title: 'The birth of PHP',
        description: 'Rasmus releases PHP tools. It was called "Personal Home Page tools" - the birth of PHP',
    },
    {
        date: 'Apr 1996',
        title: 'PHP/FI',
        description: 'Rasmus introduces PHP/FI, combining the names of previous releases(PHP). ' +
            'This second-generation implementation began the true evolution of PHP ' +
            'from a suite of tools into a programming language in its own right. ',
    },
    {
        date: 'Jun 1998',
        title: 'PHP 3.0',
        description: "Zeev and Andi rewrote the interpreter and introduced a new extension API which makes it " +
            "a lot easier for the community to contribute new extensions." +
            "The language’s name changed to the recursive acronym “PHP: Hypertext Preprocessor”." +
            " PHP 3.0 was the first version that closely resembles PHP as it exists today. ",
    },
    {
        date: 'Sep 1998',
        title: 'phpMyAdmin was born',
        description: "Tobias Ratschiller releases version 0.9.0 of the phpMyAdmin web administration tool for MySQL. " +
            "For a long time it remained one of the primary tools for accessing MySQL and MySQL-like databases.",
    },
    {
        date: '1999',
        title: 'Zend',
        description: "Zeev Suraski and Andi Gutmans release the Zend Engine.",
    },
    {
        date: 'Jan 2000',
        title: 'PEAR',
        description: "PEAR, the PHP Extension and Application Repository (originally PHP Extension and " +
            "Add-on Repository) is PHP’s version of foundation classes, and becomes one of the key ways " +
            "to distribute PHP extensions among developers. PEAR was born from discussions held " +
            "at the PHP Developers’ Meeting (PDM).",
    },
    {
        date: 'May 2000',
        title: 'PHP 4',
        description: "PHP 4 comes with a brand new Zend Engine, which has since overseen PHP advances. " +
            "In addition to greatly improved performance, PHP 4 included support for more web servers, " +
            "HTTP sessions, output buffering, and several new language constructs.",
    },
    {
        date: 'Nov 2001',
        title: 'PHPUnit',
        description: "Sebastian Bergmann starts work on the most used PHP testing framework. " +
            "It was inspired by SUnit and JUnit.",
    },
    {
        date: 'May 2003',
        title: 'Wordpress',
        description: "The most popular CMS in the world appears in 2004 and is used by more than one third of " +
            "all websites on the Internet.",
    },
    {
        date: '2004',
        title: 'Facebook.com',
        description: "Facebook.com launched as a simple, server-rendered PHP website.",
    },
    {
        date: 'Jul 2004',
        title: 'PHP 5',
        description: "Zend Engine 2, with a new object model and new extensions, such as SimpleXML, SOAP, MySQLi, SQLite.",
    },
    {
        date: 'Oct 2005',
        title: 'Symfony Project',
        description: "Symfony project kicks off and Fabien Potencier makes the first import of " +
            "the Symfony 1 code to the subversion repository.",
    },
    {
        date: 'Mar 2006',
        title: 'Zend Framework',
        description: "Zend Framework was one of the first frameworks developed as a set of reusable components. " +
            "It’s goal was “extreme simplicity” and “use-at-will architecture”. Released in 2005, " +
            "it helped bring PHP into the enterprise market.",
    },
    {
        date: '2008',
        title: 'PHP 6 book',
        description: "PHP 6 was never released but the book 'Fast and easy web development' is still " +
            "available on the Internet.",
    },
    {
        date: 'Sep 2008',
        title: 'Doctrine 1.0',
        description: "Doctrine 1.0 released",
    },
    {
        date: 'Sep 2008',
        title: 'Doctrine 1.0',
        description: "Doctrine 1.0 released",
    },
    {
        date: 'Oct 2009',
        title: 'PHP-FIG',
        description: "FIG, framework interoperability group, is born. The FIG's recommendations, called " +
            "PSRs, drastically changed the landscape of the PHP ecosystem.",
    },
    {
        date: 'Aug 2010',
        title: 'PSR-0',
        description: "PHP finally gets proper auto-loading. Before the first PSR standard was accepted, PHP files " +
            "were an insane mix of includes and requires.",
    },
    {
        date: '2010',
        title: 'FastCGI',
        description: "FPM (FastCGI Process Manager) is an alternative PHP FastCGI implementation " +
            "with some additional features useful for heavily-loaded websites. It is merged into " +
            "the PHP 5.3 release in 2010.",
    },
    {
        date: 'Dec 2010',
        title: 'Doctrine 2.0',
        description: "Doctrine 2.0 released",
    },
    {
        date: 'Apr 2011',
        title: 'Guzzle 1.0',
        description: "The first release of the famous HTTP client for PHP",
    },
    {
        date: 'Jun 2011',
        title: 'Laravel 1',
        description: "Taylor Otwell created Laravel as an attempt to provide a more advanced alternative to " +
            "CodeIgniter framework. It will go on to revolutionize the entire PHP landscape.",
    },
    {
        date: 'Jul 2011',
        title: 'Symfony 2',
        description: "Symfony 2 released",
    },
    {
        date: 'Aug 2011',
        title: 'Composer',
        description: "The first state-of-the-art package management tool for PHP.",
    },
    {
        date: 'Nov 2011',
        title: 'Laravel 2',
        description: "Laravel 2 released",
    },
    {
        date: 'Feb 2012',
        title: 'Laravel 3',
        description: "Laravel 3 released",
    },
    {
        date: 'Mar 2012',
        title: 'PHP 5.4',
        description: "Traits, shortened array syntax, and built-in webserver for testing purpose come " +
            "with significant performance improvements, a reduced memory footprint and over 100 fixed bugs.",
    },
    {
        date: 'Jun 2012',
        title: 'PSR-1 and PSR-2 accepted',
        description: "PSR-1: basic coding standard; PSR-2: coding style guide.",
    },
    {
        date: 'Sep 2012',
        title: 'Zend Framework 2',
        description: "Zend Framework 2 released",
    },
    {
        date: 'Jan 2013',
        title: 'PSR-3',
        description: "PSR-3 logger interface accepted",
    },
    {
        date: 'Apr 2013',
        title: 'ReactPHP 0.3.0',
        description: "The first public release of ReactPHP proves the async model can " +
            "be bought into PHP application.",
    },
    {
        date: 'May 2014',
        title: 'Laravel 4',
        description: "Laravel 4 is re-written from the ground up as a collection of components " +
            "that integrate with each other to make up a framework.",
    },
    {
        date: 'Dec 2014',
        title: 'PSR-4',
        description: "PSR-4 describes a specification for auto-loading classes from file paths. " +
            "This PSR also describes where to place files that will be autoloaded according to the spec.",
    },
    {
        date: 'Oct 2014',
        title: 'PSR-0 deprecated',
        description: "PSR-0 deprecated in favor of PSR-4",
    },
    {
        date: 'May 2015',
        title: 'PSR-7 HTTP message interface',
        description: "PSR-7 HTTP message interface accepted and the standard finally settled on how to deal with " +
            "HTTP requests and responses the OOP way.",
    },
    {
        date: 'Nov 2015',
        title: 'Symfony 3',
        description: "Symfony 3 released",
    },
    {
        date: 'Nov 2015',
        title: 'PSR-6 Caching',
        description: "PSR-6 caching interface accepted",
    },
    {
        date: 'Dec 2015',
        title: 'PHP 7.0',
        description: "A major language renewal comes with the new Zend Engine 3. It is twice as fast as the previous PHP 5.6 release.",
    },
    {
        date: 'Jun 2016',
        title: 'Zend Framework 3',
        description: "Zend Framework 3 released",
    },
    {
        date: 'Dec 2016',
        title: 'PHP 7.1',
        description: "Nullable types, class constant visibility modifiers, void return type, and a performance boost.",
    },
    {
        date: 'Dec 2016',
        title: 'PHP 7.1',
        description: "",
    },
    {
        date: 'Aug 2017',
        title: 'Laravel 5.5 LTS',
        description: "Laravel LTS released",
    },
    {
        date: 'Seq 2017',
        title: 'Symfony 4',
        description: "Symfony 4 released",
    },
    {
        date: 'Nov 2017',
        title: 'PHP 7.2',
        description: "PHP 7.2 released. PHP becomes the first programming language with modern " +
            "cryptography in its standard libs. Thanks to the bundled 'libssodium'.",
    },
    {
        date: 'Jun 2018',
        title: 'ReactPHP 1.0 LTS',
        description: "ReactPHP 1.0 LTS released",
    },
    {
        date: 'Dec 2018',
        title: 'PHP 7.3',
        description: "PHP 7.3 released",
    },
    {
        date: 'Sep 2019',
        title: 'Laravel 6',
        description: "Laravel 6 released",
    },
    {
        date: 'Nov 2019',
        title: 'Symfony 5',
        description: "Symfony 5 released",
    },
    {
        date: 'Nov 2019',
        title: 'PHP 7.4',
        description: "PHP 7.4 released with typed properties, arrow functions, numeric literal separator and OPcache preloading.",
    },
    {
        date: 'Mar 2020',
        title: 'Laravel 7',
        description: "Laravel 7 released",
    },
    {
        date: 'Sep 2020',
        title: 'Laravel 8',
        description: "Laravel 8 released",
    },
    {
        date: 'Nov 2020',
        title: 'PHP 8.0.0',
        description: "PHP 8.0.0 released with new features: union types, JIT, nullsafe operator, " +
            "named arguments, attributes, match expression, constructor property promotion, " +
            "new static return type, new mixed type, throw expression, allow ::class on objects, " +
            "non-capturing catches, trailing comma in parameter lists, create datetime from interface, " +
            "new Stringable interface, new str_contains function",
    },
    {
        date: 'Nov 2021',
        title: 'PHP 8.1',
        description: "PHP 8.1 released with new features: Enums, Fibers, ",
    },
    {
        date: 'Nov 2021',
        title: 'Symfony 6',
        description: "Symfony 6 released",
    },
    {
        date: 'Feb 2022',
        title: 'Laravel 9',
        description: "Laravel 9 released",
    },
    {
        date: 'Sep 2022',
        title: 'PHP 8.1.10',
        description: "PHP 8.1.10 released",
    }
];

export default function Web3() {
    return <>
        <HomeButton/>
        <main>
            <Head>
                <title>PHP History Timeline</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <Hero title1={'PHP'} title2={'OOP'} title3={'Web Dev'}/>

            <MyTimelineWrapper items={items}/>
        </main>

        <Footer/>
    </>;
}
