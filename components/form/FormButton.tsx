import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.md,
    borderRadius: 2,
    padding: 16,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.primary,
  },
});
