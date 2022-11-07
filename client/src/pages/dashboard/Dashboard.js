import React from "react";
import './dashboard.css'
import { Sidemenu } from "../../components/menu/Sidemenu";
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Piechart from "../../components/pieChart/piechart";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const categories = [
    {
        "category": [
            { "label": "Jan" },
            { "label": "Feb" },
            { "label": "Mar" },
            { "label": "Apr" },
            { "label": "May" },
            { "label": "Jun" },
            { "label": "Jul" },
            { "label": "Aug" },
            { "label": "Sep" },
            { "label": "Oct" },
            { "label": "Nov" },
            { "label": "Dec" }
        ]
    }
]
// STEP 3- Construct the dataset comprising multiple series
const dataset = [
    {
        "seriesname": "Number of People Found",
        "data": [
            { "value": "12000" },
            { "value": "10500" },
            { "value": "23500" },
            { "value": "16000" },
            { "value": "12000" },
            { "value": "10500" },
            { "value": "23500" },
            { "value": "16000" },
            { "value": "12000" },
            { "value": "10500" },
            { "value": "23500" },
            { "value": "16000" }
        ]
    },
    {
        "seriesname": "Number of People Missing",
        "data": [
            { "value": "24400" },
            { "value": "29800" },
            { "value": "20800" },
            { "value": "26800" },
            { "value": "24400" },
            { "value": "29800" },
            { "value": "20800" },
            { "value": "26800" },
            { "value": "24400" },
            { "value": "29800" },
            { "value": "20800" },
            { "value": "26800" }
        ]
    }
]

const chartConfigs = {
    type: 'mscolumn2d',
    width: 850,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Monthly Missing/Found Report",
            "subCaption":"List of Number of Missing/Found People",
            "xAxisname": "Months",
            "yAxisName": "Number of People",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1"
        },
        "categories": categories,
        "dataset": dataset,
    },
};

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <Sidemenu id={1} />
                <div className="right-cont">
                    <div className="nav">
                        <h1>Dashboard</h1>
                    </div>
                    <hr />
                    <div className="mainSection">
                        <div className="row">
                            <div className="row-items">
                                <div className="cards">
                                    <div className="icon card-item">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div className="details card-item">
                                        <p>Today's Found</p>
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row-items">
                                <div className="cards">
                                    <div className="icon card-item">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    </div>
                                    <div className="details card-item">
                                        <p>Today's Missing</p>
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row-items">
                                <div className="cards">
                                    <div className="icon card-item">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </div>
                                    <div className="details card-item">
                                        <p>Donate</p>
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row-items">
                                <div className="cards">
                                    <ReactFC {...chartConfigs} />
                                </div>
                            </div>
                            <div className="row-items">
                                <div className="cards">
                                    <Piechart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard;