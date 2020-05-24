import React from 'react';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'

import './footer.styles.scss';

const Footer =()=> {
    return(
        <footer> 
        <div class="row section-footer">
            
                <div class="col span-1-of-2">
                    <ul class="footer-nav">

                    </ul>
                </div>

            
            <div class="col span-1-of-2">
                <ul class="social-links">
                        <li><a href="https://www.linkedin.com/in/idahara-edem-30732b134" target="_blank"> <LogoLinkedin/> </a></li>
                </ul>
            </div>

            <div class="row">
                <p> Copyright &copy; 2020 by Idaharabasi Edem </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;