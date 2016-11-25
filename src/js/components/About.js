import React, {Component} from 'react';
import Section from './Section';

class About extends Component {
    render() {
        return (
            <Section
                title='Learn About Us'
                className='about'
            >
                <video className='about__video' poster='images/stillframe.png'  controls>
                    <source src='/images/video.mp4' type="video/mp4"/>
                </video>
                <div className='container  about__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nunc fermentum, malesuada dolor non, imperdiet odio. Nulla ut sollicitudin nunc. Vestibulum nec urna a arcu tristique bibendum consequat vel sem. Aliquam ut eros cursus, hendrerit mi maximus, scelerisque metus. Duis non mi mi. Vivamus malesuada mauris lacinia, laoreet risus nec, malesuada sapien. Nunc a ligula massa. Aliquam nec mattis metus, ac dignissim justo. Nam ullamcorper placerat lorem. Nulla id auctor lorem, id tristique sapien. Mauris ante arcu, laoreet nec eros a, bibendum commodo lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vitae purus mauris. Nam bibendum metus sit amet efficitur placerat. Curabitur ut finibus mauris.
                </div>
            </Section>
        );
    }
}

export default About;
