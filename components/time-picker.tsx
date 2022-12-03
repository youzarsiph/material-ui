import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/TimePicker.module.css";

interface TimePickerProps extends Props {}

class TimePicker extends Component<TimePickerProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
