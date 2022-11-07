import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "Total Missing/Found Report",
        plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion"
    },
    data: [
        {
            label: "Number of Found People",
            value: "40%"
        },
        {
            label: "Number of Missing People",
            value: "60"
        }
    ]
};

const Piechart = () => {
    return (
        <ReactFusioncharts
            type="pie2d"
            width="30%"
            height="43%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
}


export default Piechart;