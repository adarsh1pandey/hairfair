import React, { useState } from 'react';

import { HeroContainer, HeroBg, HeroContent,
HeroBtnWrapper, HeroH1, HeroP, ArrowForward,
ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import Main from '../../images/barber.jpg';

const HeroSection = () => {
    
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <img src={Main} alt="haircut"
                width= "100%"
                height= "100%"
                object-fit="cover" />
            </HeroBg>
            <HeroContent>
                <HeroH1>A Barber Shop Booking website You Can Trust</HeroH1>
                <HeroP>Reserve your seat</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Make an appointment {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
