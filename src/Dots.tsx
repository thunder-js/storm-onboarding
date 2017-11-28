import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 22px;
`
const Dot = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props: {selected: boolean}) => props.selected ? '#FFF' : 'rgba(255, 255, 255, 0.5)'};
  margin-horizontal: 7px;
`


const ButtonText = styled(Text)`
  color: #FFF;
  font-size: 15px;
`

const DotsWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const ButtonWrapper = styled(View)`
  flex: 1.5;
`
const LeftButtonWrapper = styled(ButtonWrapper)`
  align-items: flex-start;
  padding-left: 22px;
`
const RightButtonWrapper = styled(ButtonWrapper)`
  align-items: flex-end;
  padding-right: 22px;
`

const Button = styled(TouchableOpacity)`
  padding-horizontal: 12px;
  padding-vertical: 8px;
`
const Dots = ({
  selectedIndex,
  numberOfDots,
  onSkip,
  onNext,
  onFinish,
}) => {
  const lastPage = (selectedIndex === numberOfDots - 1)
  const handleRightButtonPress = lastPage
    ? onFinish
    : onNext
  const rightButtonText = lastPage
    ? 'Começar'
    : 'Próximo'

  return (
    <Wrapper>
      <LeftButtonWrapper>
        <Button onPress={onSkip}>
          <ButtonText>PULAR</ButtonText>
        </Button>
      </LeftButtonWrapper>

      <DotsWrapper>
        {[...Array(numberOfDots)].map((_, i) => (
          <Dot
            key={`key-${i}`}
            selected={i === selectedIndex}
          />
        ))}
      </DotsWrapper>

      <RightButtonWrapper>
        <Button onPress={handleRightButtonPress}>
          <ButtonText>
            {rightButtonText.toUpperCase()}
          </ButtonText>
        </Button>
      </RightButtonWrapper>

    </Wrapper>
  )
}
export default Dots
