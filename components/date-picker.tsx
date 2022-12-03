import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/DatePicker.module.css";

interface DatePickerProps extends Props {}

class DatePicker extends Component<DatePickerProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
