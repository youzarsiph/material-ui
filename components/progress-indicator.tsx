import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/ProgressIndicator.module.css";

interface ProgressIndicatorProps extends Props {}

class ProgressIndicator extends Component<ProgressIndicatorProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
