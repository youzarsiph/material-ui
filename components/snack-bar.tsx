import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/SnackBar.module.css";

interface SnackBarProps extends Props {}

class SnackBar extends Component<SnackBarProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
