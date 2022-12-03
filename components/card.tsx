import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/Card.module.css";

interface CardProps extends Props {}

class Card extends Component<CardProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
