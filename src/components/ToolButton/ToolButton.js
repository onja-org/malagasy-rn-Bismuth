import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, View} from 'react-native';
import {
  TOOL_BUTTON_CONTAINER_STYLE,
  TOOL_BUTTON_STYLE,
  getStyle,
} from '../../themeMode';

export default function ToolButton({onPress, themeMode, children}) {
  return (
    <TouchableHighlight
      style={getStyle(TOOL_BUTTON_CONTAINER_STYLE, themeMode)}
      underlayColor="#E5E5E5"
      onPress={onPress}>
      <View style={getStyle(TOOL_BUTTON_STYLE, themeMode)}>{children}</View>
    </TouchableHighlight>
  );
}

ToolButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ToolButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
