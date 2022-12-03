import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/NavigationDrawer.module.css";

interface NavigationDrawerProps extends Props {}

class NavigationDrawer extends Component<NavigationDrawerProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
