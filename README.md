## 🌩️ Storm OnBoarding 🌩️

A react native component for making building OnBoarding screens

![Screenshot](https://raw.githubusercontent.com/thunder-js/storm-onboarding/master/screenshots/img1.png)

## Installation
```
yarn add storm-onboarding
```

## Usage

```js
import OnBoarding from 'storm-onboarding'

const PAGES = [{
  text: 'Texto1',
  imageSource: {uri: 'https://placehold.it/400x400'}
}, {
  text: 'Texto2',
  imageSource: {uri: 'https://placehold.it/400x400'}
}, {
  text: 'Texto3',
  imageSource: {uri: 'https://placehold.it/400x400'}
}]
const LOGO = {uri: 'https://unsplash.it/300x400'}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <OnBoarding
          backgroundColor="tomato"
          pages={PAGES}
          onFinish={() => {}}
          onSkip={() => {}}
          logoSource={LOGO}
        />
      </View>
    );
  }
}
```

## Props
```js
{
  onSkip: func.isRequired,
  onFinish: func.isRequired,
  pages: arrayOf(shape({
    imageSource: any,
    text: string,
  })).isRequired,
  logoSource: any.isRequired,
  backgroundColor: string.isRequired,
  gradientBackground: bool,
  gradientColors: arrayOf(string),
}
```
