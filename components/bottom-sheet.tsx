import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/BottomSheet.module.css";

interface BottomSheetProps extends Props {}

class BottomSheet extends Component<BottomSheetProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
