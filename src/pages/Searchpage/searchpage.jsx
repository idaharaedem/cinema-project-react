import React from 'react';
import Nav from '../../components/nav/nav';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';

import './searchpage.styles.scss';

const SearchPage = () => (
    <div>
         <Nav/>
         <Search/>
         <Footer/>
    </div>
);

export default SearchPage;