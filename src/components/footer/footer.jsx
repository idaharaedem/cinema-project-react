import React from 'react';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import { Grid } from '@material-ui/core';

import './footer.styles.scss';

const Footer =()=> {
    return(
        <footer> 
        <div class="row section-footer">
            <Grid container spacing={2}>
                <div class="col span-1-of-2">
                    <ul class="footer-nav">

                    </ul>
                </div>

            
            <div class="col span-1-of-2">
                <ul class="social-links">
                        <li><a href="https://www.linkedin.com/in/idahara-edem-30732b134" target="_blank"> <LogoLinkedin className="social"/> </a></li>
                </ul>
            </div>

            <div class="row">
                <p> Copyright &copy; 2020 by Idaharabasi Edem </p>
            </div>
            </Grid>
            </div>
        </footer>
    )
}

export default Footer;