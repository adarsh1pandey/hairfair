import React from 'react'

import { ServicesContainer, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2,
ServicesP } from './ServicesElements';
import Icon1 from '../../images/haircut.png';
import Icon2 from '../../images/beard.png';
import Icon3 from '../../images/style.png';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Professional Haircuts</ServicesH2>
                    <ServicesP>We offer professional haircuts tailored to the request of our patrons</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Beard Grooming</ServicesH2>
                    <ServicesP>Need a trim or new beard style? We got you covered.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Hair Styling</ServicesH2>
                    <ServicesP>Every fresh haircut needs some extra styling. Let us style your hair to complete that final new look.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
