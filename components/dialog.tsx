import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/Dialog.module.css";

interface DialogProps extends Props {}

class Dialog extends Component<DialogProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
