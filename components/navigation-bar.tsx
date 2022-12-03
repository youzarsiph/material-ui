import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/NavigationBar.module.css";

interface NavigationBarProps extends Props {}

class NavigationBar extends Component<NavigationBarProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
