import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/Badge.module.css";

interface BadgeProps extends Props {}

interface BadgeState extends State {}

class Badge extends Component<BadgeProps, BadgeState> {
  render(): ReactNode {
    return <div></div>;
  }
}
