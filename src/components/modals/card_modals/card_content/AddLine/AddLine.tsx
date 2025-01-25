import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddIcon from "@/src/components/icons/common_icons/AddIcon";

const AddLine = () => {
  // append empty line to line content array
  const addNewLine = () => {};
  return (
    <View>
      <Pressable onPress={addNewLine}>
        <AddIcon />
      </Pressable>
    </View>
  );
};

export default AddLine;

const styles = StyleSheet.create({});
