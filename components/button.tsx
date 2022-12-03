import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/Button.module.css";

interface ButtonProps extends Props {}

class Button extends Component<ButtonProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
