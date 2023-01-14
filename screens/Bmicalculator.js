import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  Margin,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Color,
} from "../GlobalStyles";

const Bmicalculator = () => {
  return (
    <View style={styles.bmicalculator}>
      <View style={styles.inputbox}>
        <RNPTextInput
          style={styles.textFieldoutlined}
          placeholder="Age"
          label="Enter Age"
          mode="flat"
          placeholderTextColor="#000"
          underlineColor="#000"
          activeUnderlineColor="#00ff00"
          theme={{ colors: { text: "rgba(0, 0, 0, 0.28)" } }}
        />
        <RNPTextInput
          style={[styles.textFieldoutlined1, styles.mt56]}
          placeholder="Weight"
          label="Kg"
          mode="flat"
          placeholderTextColor="#000"
          theme={{ colors: { text: "rgba(0, 0, 0, 0.54)" } }}
        />
      </View>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <Text style={styles.calculateBmihere}>Calculate BMI,here!</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.headerSpaceBlock]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <View style={styles.buttoncover}>
          <View style={[styles.buttoncover1, styles.buttoncover1Position]}>
            <View style={styles.content}>
              <View style={styles.iconPlaceholder} />
              <Text style={[styles.calcualte, styles.ml8]}>Calculate</Text>
              <View style={[styles.iconPlaceholder, styles.ml8]} />
            </View>
          </View>
          <View style={[styles.buttoncoverChild, styles.outputbmiPosition]} />
        </View>
      </TouchableOpacity>
      <View style={[styles.bmiWrapper, styles.headerSpaceBlock]}>
        <Text style={styles.bmi}>BMI</Text>
      </View>
      <View style={[styles.outputbmi, styles.outputbmiPosition]}>
        <View style={styles.output}>
          <View style={[styles.startAdornment, styles.adornmentSpaceBlock]}>
            <Text style={[styles.kg, styles.kgTypo]}>Kg</Text>
          </View>
          <View style={[styles.value, styles.ml12]}>
            <View>
              <View style={styles.minWidthSpacer}>
                <View
                  style={[styles.minWidthSpacer1, styles.buttoncover1Position]}
                />
              </View>
              <Text style={[styles.placeholder, styles.kgTypo]}>BMI</Text>
              <View style={styles.minWidthSpacer}>
                <View
                  style={[styles.minWidthSpacer1, styles.buttoncover1Position]}
                />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.endAdornment,
              styles.ml12,
              styles.adornmentSpaceBlock,
            ]}
          >
            <Image
              style={styles.iconDropDown}
              resizeMode="cover"
              source={require("../assets/icon--drop-down.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt56: {
    marginTop: 56,
  },
  ml8: {
    marginLeft: Margin.m_sm,
  },
  ml12: {
    marginLeft: Margin.m_md,
  },
  headerSpaceBlock: {
    padding: Padding.p_lg,
    position: "absolute",
  },
  buttoncover1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  outputbmiPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  adornmentSpaceBlock: {
    paddingTop: Padding.p_sm,
    display: "none",
    flexDirection: "row",
  },
  kgTypo: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
  },
  textFieldoutlined: {
    height: 48,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textFieldoutlined1: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  inputbox: {
    marginLeft: -124,
    top: 171,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 57,
    alignItems: "center",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_md,
  },
  calculateBmihere: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.workSans,
    textAlign: "left",
    color: Color.black,
  },
  header: {
    top: 64,
    left: 120,
    flexDirection: "row",
  },
  iconPlaceholder: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.grey500,
    display: "none",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  calcualte: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    fontFamily: FontFamily.button,
    color: Color.grey800,
    textAlign: "center",
  },
  content: {
    marginTop: -12,
    marginLeft: -32.5,
    top: "50%",
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  buttoncover1: {
    borderRadius: 8,
    backgroundColor: Color.grey300,
  },
  buttoncoverChild: {
    height: "250%",
    width: "38.91%",
    top: "-77.5%",
    right: "25.68%",
    bottom: "-72.5%",
    left: "35.41%",
  },
  buttoncover: {
    width: 257,
    height: 40,
  },
  button: {
    top: 693,
    left: 54,
  },
  bmi: {
    fontSize: 40,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.black,
  },
  bmiWrapper: {
    top: 555,
    left: 41,
    flexDirection: "row",
  },
  kg: {
    color: Color.gray54,
  },
  startAdornment: {
    paddingBottom: 5,
    alignItems: "center",
  },
  minWidthSpacer1: {
    opacity: 0,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  minWidthSpacer: {
    width: 80,
    height: 2,
  },
  placeholder: {
    color: Color.gray28,
  },
  value: {
    paddingTop: 6,
    paddingBottom: 8,
    flexDirection: "row",
  },
  iconDropDown: {
    width: 24,
    height: 24,
  },
  endAdornment: {
    paddingBottom: 3,
  },
  output: {
    paddingLeft: Padding.p_md,
    paddingTop: Padding.p_md,
    paddingRight: 12,
    paddingBottom: Padding.p_md,
    flexDirection: "row",
    alignItems: "center",
  },
  outputbmi: {
    top: 542,
    left: 181,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  bmicalculator: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
  },
});

export default Bmicalculator;
