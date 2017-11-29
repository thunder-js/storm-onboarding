import React from 'react';
import { Image, View, Dimensions, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import Dots from './Dots'

const { width } = Dimensions.get('window')

const Logo = styled(Image)`
  align-self: stretch;
  margin-top: 40px;
  height: 60px;
  margin-bottom: 40px;
`;

const SlideImage = styled(Image)`
  width: 230px;
  height: 240px;
  margin-bottom: 30px;
`;

const BodyText = styled(Text)`
  font-size: 16px;
  color: #FFF;
  text-align: center;
`;

const Slide = styled(View)`
  width: ${width};
  align-items: center;
  padding-horizontal: 50px;
`

const Slider = styled(ScrollView)`

`

//  TODO: Gradient
const GradientBackground = styled(View)`
  flex: 1;
`
const SolidBackground = styled(View)`
  flex: 1;
  background-color: ${(props: {color: string}) => props.color}
`

export interface Page {
  imageSource: any;
  text: string;
}

export interface OnBoardingProps {
  onSkip: any;
  onFinish: any;
  pages: Page[];
  logoSource: any;
  backgroundColor: string;
  gradientBackground?: boolean;
  gradientColors?: string[];
} 
export interface OnBoardingState {
  currentIndex: number
}

export class OnBoarding extends React.Component<OnBoardingProps, OnBoardingState> {
  scrollView: any

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  handleMomentumScrollEnd = (e) => {
    const {
      contentOffset,
      layoutMeasurement
    } = e.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
    this.setState({
      currentIndex,
    })
  }

  handleNext = () => {
    const currentIndex = this.state.currentIndex + 1
    this.scrollView.scrollTo({
      y: 0,
      x: currentIndex * width,
    })
    this.setState({
      currentIndex,
    })
  }

  render() {
    const {
      onFinish,
      onSkip,
      pages,
      logoSource,
      backgroundColor,
      gradientBackground,
      gradientColors,
    } = this.props
    const {
      currentIndex,
    } = this.state

    const BackgroundComponent = gradientBackground
      ? GradientBackground
      : SolidBackground
    const backgroundProps = gradientBackground
      ? { colors: gradientColors }
      : { color: backgroundColor }

    return (
      <BackgroundComponent {...backgroundProps}>
        <Logo
          source={logoSource}
          resizeMode="contain"
        />
        <Slider
          innerRef={(scrollView) => { this.scrollView = scrollView }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.handleMomentumScrollEnd}
        >
          {
            pages.map((page, i) => (
              <Slide key={`${i}`}>
                <SlideImage source={page.imageSource} resizeMode="contain" />
                <BodyText>
                  {page.text}
                </BodyText>
              </Slide>
            ))
          }
        </Slider>
        <Dots
          numberOfDots={pages.length}
          selectedIndex={currentIndex}
          onSkip={onSkip}
          onFinish={onFinish}
          onNext={this.handleNext}
        />

      </BackgroundComponent>
    )
  }
}