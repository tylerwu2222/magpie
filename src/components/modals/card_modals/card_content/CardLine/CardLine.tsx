import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

import { Checkbox, Menu } from "react-native-paper";

import { CardLineTypes } from "@/src/types/components";
import CustomTextInput from "@/src/components/inputs/text_input/TextInput";
import DotMenuIcon from "@/src/components/icons/common_icons/DotMenuIcon";

export default function CardLine() {
  const contentTypes = ["text", "checkbox", "gauge", "image"];
  const [contentType, setContentType] = useState<CardLineTypes>("text");
  const [contentText, setContentText] = useState<string>("");
  const [contentTypeMenuVisibile, setContentTypeMenuVisibile] =
    useState<boolean>(false);
  const [contentChecked, setContentChecked] = useState<boolean>(false);

  const toggleTypeMenuVisibility = () => {
    setContentTypeMenuVisibile(!contentTypeMenuVisibile);
  };
  const closeTypeMenuVisibility = () => {
    setContentTypeMenuVisibile(false);
  };

  const styles = StyleSheet.create({
    cardLine: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: 10,
    //   backgroundColor: "blue",
    },
    cardContent: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <View style={styles.cardLine}>
      {/* line content */}
      <View style={styles.cardContent}>
        {/* text content, for all but image */}
        {/* checkbox */}
        {contentType === "checkbox" && (
          <Checkbox
            status={contentChecked ? "checked" : "unchecked"}
            color={"black"}
            onPress={() => {
              setContentChecked(!contentChecked);
            }}
          />
        )}
        {/* text/title */}
        {contentType !== "image" && <CustomTextInput isFullWidth={true} />}
        {/* gauge */}
        {/* {contentType === "gauge" && } */}
      </View>
      {/* menu to toggle content type */}
      <View>
        <Menu
          visible={contentTypeMenuVisibile}
          onDismiss={closeTypeMenuVisibility}
          anchor={
            <Pressable onPress={toggleTypeMenuVisibility}>
              <DotMenuIcon />
            </Pressable>
          }
        >
          {contentTypes.map((c) => {
            return (
              <Menu.Item
                key={c}
                onPress={() => {
                  setContentType(c as CardLineTypes);
                }}
                title={c}
                style={{
                        
                }}
              />
            );
          })}
        </Menu>
      </View>
    </View>
  );
}
