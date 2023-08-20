import { Box, Container, HStack, Heading, Image, Text  } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <HStack
          h={'full'}
          p={'4'}
          alignItems={'centre'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            filter={'hue-rotate(-130deg)'}
            height={['0', '400']}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos
            dolor, distinctio, repellat sapiente asperiores modi corrupti iure
            nihil, facere veniam porro blanditiis consequatur. Vero quia ipsum
            doloribus beatae cum iusto aliquam facilis quod dolorum, facere
            excepturi quisquam nesciunt voluptatum ullam aut doloremque
            similique amet minima accusamus nam corrupti saepe dicta neque!
            Pariatur est odit cum praesentium, ut tempore laboriosam commodi
            perspiciatis odio ea recusandae distinctio. Necessitatibus iusto
            quam, non porro quos sit possimus ad illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestiae natus, voluptas ducimus explicabo cumque deserunt voluptatem minus atque eum!
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box width={'full'} height={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box width={'full'} height={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'Black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box width={'full'} height={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'Black'} {...headingOptions}>
        Get ready
      </Heading>
    </Box>
    <Box width={'full'} height={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'Black'} {...headingOptions}>
        for new world
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
