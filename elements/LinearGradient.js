import React, { Component } from "react";
import { requireNativeComponent } from "react-native";
import extractGradient from "../lib/extract/extractGradient";

export default class LinearGradient extends Component {
    static displayName = "LinearGradient";

    static defaultProps = {
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
    };

    render() {
        const { props } = this;
        const { x1, y1, x2, y2 } = props;
        return (
            <RNSVGLinearGradient
                ref={this.refMethod}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                {...extractGradient(props)}
            />
        );
    }
}

const RNSVGLinearGradient = requireNativeComponent("RNSVGLinearGradient");
