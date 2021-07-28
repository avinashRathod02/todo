import React from "react";
import { reduxForm, Field } from "redux-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import MyTextInput from "../InputField";
import styles from "./styles";
const phoneFormatter = (number) => {
  if (!number) return "";
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return number.substring(0, 7).match(splitter).join("-") + number.substring(7);
};

const phoneParser = (number) => (number ? number.replace(/-/g, "") : "");

function AddForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={"handled"}>
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>Phone number</Text>
      <Field
        name={"phoneNumber"}
        component={MyTextInput}
        placeholder={"NNN-NNN-NNNN"}
        format={phoneFormatter}
        parse={phoneParser}
      />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>Min date</Text>
      <Field
        name={"minDate"}
        component={MyTextInput}
        placeholder={"MM-DD-YYYY"}
      />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>Max date</Text>
      <Field
        name={"maxDate"}
        component={MyTextInput}
        placeholder={"MM-DD-YYYY"}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({
  form: "signIn",
})(AddForm);
