import React from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {COLORS, FONTS} from '../../config/Themes';
import {selectedTheme, SIZES} from '../../config/Themes';
import style from './style';

interface Sliderprops {
  values: any;
  min: any;
  max: any;
  postfix: any;
  onValueChange: any;
  prifix: string;
}
const MultiSliders = (props: Sliderprops) => {
  const {values, min, max, postfix, onValueChange, prifix} = props;
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width}
      min={min}
      max={max}
      markerOffsetY={15}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 3,
        backgroundColor: COLORS.gray10,
      }}
      minMarkerOverlapDistance={50}
      customMarker={e => {
        return (
          <View 
          testID='test'
          style={style.container}>
            <View style={style.subcontainer} />
            <Text
              style={{
                marginTop: 5,
                color: selectedTheme.textblackNgray,
                ...FONTS.body,
              }}>
              {prifix}{e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={values => onValueChange(values)}
    />
  );
};

export default MultiSliders;
