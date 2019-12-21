import React, { Component } from 'react';
import Carousel from '../common/Carousel';

class HomePage extends Component {
    state = {
        data: [
            {
                src: 'https://hdoboi.kiev.ua/images/09.Jul.2019-subnautica-2018-igra-4k.jpg',
                altText: 'Slide 1',
                caption: 'Slide 1'
              },
              {
                src: 'https://images.unsplash.com/photo-1553949333-0510da388b82?ixlib=rb-1.2.1&w=1000&q=80',
                altText: 'Slide 2',
                caption: 'Slide 2'
              },
              {
                src: 'https://i.pinimg.com/originals/f7/5d/29/f75d29ef38f736b47413cbca69f784cd.jpg',
                altText: 'Slide 3',
                caption: 'Slide 3'
              }
        ]
    };
    render() {
        return (
            <>
                <Carousel items="this.state.data"/>
                <div className="container">
                    <h1>Hello Home Page</h1>
                </div>
            </>
        );
    }
}

export default HomePage;