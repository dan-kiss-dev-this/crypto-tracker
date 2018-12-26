import React from "react";
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

class CandleStickChart extends React.Component {
    render() {
        const { type, width, data, ratio } = this.props;
        const xAccessor = d => new Date(d.time*1000);
        const xExtents = [
            xAccessor(last(data)),
            xAccessor(data[data.length - 30])
        ];
        console.log(21,' chart components ',this.props);
		return (
            xExtents.length <= 1 ? <p>User Reload Page</p> :
			<ChartCanvas height={400}
			    ratio={ratio}
					 width={width}
					 margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
					 type={type}
					seriesName="MSFT"
					data={data}
					xAccessor={xAccessor}
					xScale={scaleTime()}
                     xExtents={xExtents}
                     >

				<Chart id={1} yExtents={d => [d.high, d.low]}>
					<XAxis axisAt="bottom" orient="bottom" ticks={6}/>
					<YAxis axisAt="left" orient="left" ticks={5} />
					<CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
				</Chart> 
			 </ChartCanvas> 
		);
	}
}

CandleStickChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandleStickChart.defaultProps = {
	type: "svg",
};
CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;

