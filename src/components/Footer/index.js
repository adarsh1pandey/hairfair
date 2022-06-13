import React from 'react'

import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
FooterLink, SocialIconLink, SocialIcons,
SocialLogo, SocialMedia, SocialMediaWrap,
WebsiteRights } from './FooterElements';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { animateTopScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Reviews</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={scrollToTop}>
                            HairFair
                        </SocialLogo>
                        <WebsiteRights>HairFair © 2021</WebsiteRights>
                    </SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
