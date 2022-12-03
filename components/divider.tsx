import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/Divider.module.css";

interface DividerProps extends Props {}

class Divider extends Component<DividerProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
