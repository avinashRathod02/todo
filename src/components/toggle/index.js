import React, { useRef } from "react";
import { TextInput, View, Text, Switch } from "react-native";
export default function ToggleSwitch(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <Switch
        {...inputProps}
        onValueChange={input.onChange}
        value={input.value}
      />
    </View>
  );
}
