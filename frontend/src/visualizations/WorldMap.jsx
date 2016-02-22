import React, { Component, PropTypes } from "react";

import CardRenderer from "./components/CardRenderer.jsx";
import ChartTooltip from "./components/ChartTooltip.jsx";

import { isString } from "metabase/lib/schema_metadata";

import { MinColumnsError } from "metabase/visualizations/lib/errors";

export default class WorldMap extends Component {
    static displayName = "World Map";
    static identifier = "country";
    static iconName = "countrymap";

    static isSensible(cols, rows) {
        return cols.length > 1 && isString(cols[0]);
    }

    static checkRenderable(cols, rows) {
        if (cols.length < 2) { throw new MinColumnsError(2, cols.length); }
    }

    render() {
        const { series, hovered, className } = this.props;
        return (
            <div className={"flex " + className}>
                <CardRenderer {...this.props} className="flex-full" chartType="country" />
                <ChartTooltip series={series} hovered={hovered} pinToMouse={true} />
            </div>
        );
    }
}
