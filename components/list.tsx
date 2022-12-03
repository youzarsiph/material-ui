import Props, { State } from "./interfaces";
import { Component, ReactNode } from "react";
import styles from "../styles/components/List.module.css";

interface ListProps extends Props { }

class List extends Component<ListProps, State> {
  render(): ReactNode {
    return <div></div>;
  }
}
