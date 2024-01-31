import React, {memo} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, selectedTheme} from '../../config/Themes';
import styles from './style';

interface renderprops {
  index: number;
  item: {
    id: number;
    label: string;
    icon: any;
  };
  defaultitem: string;
  setdefaultitem: React.Dispatch<React.SetStateAction<string>>;
  setdefaulticon: React.Dispatch<React.SetStateAction<undefined>>;
}

const Renderitem = (props: renderprops) => {
  const {item, defaultitem, setdefaultitem, setdefaulticon} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        setdefaultitem(item.label), setdefaulticon(item.icon);
      }}
      style={[
        styles(selectedTheme).item,
        {
          backgroundColor:
            defaultitem == item.label
              ? selectedTheme.TRANSPARENTBLACK
              : selectedTheme.backgroundwhite3Ngray8,
          borderColor:
            defaultitem == item.label
              ? selectedTheme.TRANSPARENTBLACK
              : selectedTheme.borderColor1,
        },
      ]}>
      <Image
        source={item.icon}
        style={[
          styles(selectedTheme).icons,
          {
            tintColor:
              defaultitem == item.label
                ? COLORS.white
                : selectedTheme.tintColor,
          },
        ]}
      />
      <Text
        style={[
          styles(selectedTheme).itemText,
          {
            color:
              defaultitem == item.label
                ? COLORS.white
                : selectedTheme.textblackNwhite,
          },
        ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Renderitem);
