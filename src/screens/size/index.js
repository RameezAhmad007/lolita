import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Header from '../../components/header';
import styles from './styles';
import {colors} from '../../utils/theme';

const Size = () => {
  const [startValue, setStartValue] = useState(null);
  const [sliderValue, setSliderValue] = useState([65]);
  const [endValue, setEndValue] = useState(null);
  const [minValue] = useState(65);
  const [maxValue] = useState(122);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Size up</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../images/shirt.png')}
            />
          </View>

          <Text style={styles.sizeText}>Bust</Text>
          <MultiSlider
            selectedStyle={{
              backgroundColor: colors.app.white,
            }}
            unselectedStyle={{
              backgroundColor: colors.app.white,
            }}
            values={sliderValue}
            containerStyle={{
              height: 20,
              marginTop: 20,
              // backgroundColor: 'brown',
            }}
            trackStyle={{
              height: 8,
              // backgroundColor: 'red',
              borderRadius: 5,
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            markerContainerStyle={{
              top: -20,
              // backgroundColor: 'red'
            }}
            markerStyle={{
              borderRadius: 4,
              borderWidth: 2,
              height: 20,
              width: 18,
              borderColor: colors.app.white,
              backgroundColor: colors.app.main,
            }}
            // pressedMarkerStyle={{
            //   borderRadius: 4,
            //   borderWidth: 2,
            //   height: 20,
            //   width: 18,
            //   borderColor: colors.app.white,
            //   backgroundColor: colors.app.main,
            // }}
            min={minValue}
            max={maxValue}
            onValuesChangeStart={value => {
              setStartValue(value);
            }}
            onValuesChange={value => {
              setSliderValue(value);
            }}
            onValuesChangeFinish={value => {
              setEndValue(value);
            }}
            showSteps={true}
            sliderLength={310}
            // enableLabel={true}
          />
          <View style={styles.sliderValues}>
            <Text style={styles.sliderValueText}>{minValue}</Text>
            <Text style={styles.sliderValueText}>{maxValue}</Text>
          </View>
          {/* <Text>startValue: {startValue}</Text>
          <Text>sliderValue: {sliderValue}</Text>
          <Text>endValue: {endValue}</Text> */}
        </View>
      </View>
    </>
  );
};

export default Size;
