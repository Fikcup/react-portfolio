import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

// TODO: Get { currentPage } functionality working

const Page = ({ currentPage }) => {

    const renderPage = () => {
        switch({ currentPage }) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact me':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <section>
            <PageContent>{ renderPage() }</PageContent>
        </section>
    )
}

export default Page;