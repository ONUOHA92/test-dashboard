import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { listData } from '../../data/list'

class UsersOverview extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.canvasRef = React.createRef();
  // }


  // componentDidMount() {
  //   const chartOptions = {
  //     ...{
  //       responsive: true,
  //       legend: {
  //         position: "top"
  //       },
  //       elements: {
  //         line: {
  //           // A higher value makes the line look skewed at this ratio.
  //           tension: 0.3
  //         },
  //         point: {
  //           radius: 0
  //         }
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             gridLines: false,
  //             ticks: {
  //               callback(tick, index) {
  //                 // Jump every 7 values on the X axis labels to avoid clutter.
  //                 return index % 7 !== 0 ? "" : tick;
  //               }
  //             }
  //           }
  //         ],
  //         yAxes: [
  //           {
  //             ticks: {
  //               suggestedMax: 45,
  //               callback(tick) {
  //                 if (tick === 0) {
  //                   return tick;
  //                 }
  //                 // Format the amounts using Ks for thousands.
  //                 return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
  //               }
  //             }
  //           }
  //         ]
  //       },
  //       hover: {
  //         mode: "nearest",
  //         intersect: false
  //       },
  //       tooltips: {
  //         custom: false,
  //         mode: "nearest",
  //         intersect: false
  //       }
  //     },
  //     // ...this.props.chartOptions
  //   };

  // }

  render() {


    const datainfo = listData.map((data, index) => (
      <Row key={index} style={{ padding: 5, marginTop: 50, width: 400 }}>
        <Col sm="8" md='8' className="d-flex  mb-sm-0">
          <img src={data.image} alt="" style={{ width: 50, height: 50, borderRadius: 10 }} />
          <div style={{ marginLeft: 7 }}>
            <h6 style={{ fontSize: 20, fontWeight: '500', marginTop: 5 }}>{data.name}</h6>
            <p style={{ marginTop: -10 }}>{data.text}</p>
          </div>

        </Col>
        <Col sm="4" md='4'>
          <div>
            <p style={{ marginTop: 10 }}>{data.date}</p>
            <p style={{ backgroundColor: 'red', width: 25, height: 25, marginTop: -30, marginLeft: 10, color: 'white', textAlign: 'center' }}>{data.number}</p>
          </div>

        </Col>
      </Row>
    ))

    return (
      <Card small className="h-300">
        <CardHeader className="border-bottom">
          {/* <h6 className="m-0"></h6> */}

        </CardHeader>
        <CardBody className="pt-0">


          {datainfo}
          {/* <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">

            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >

              </Button>
            </Col>
          </Row> */}

        </CardBody>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "Current Month",
        fill: "start",
        data: [
          500,
          800,
          320,
          180,
          240,
          320,
          230,
          650,
          590,
          1200,
          750,
          940,
          1420,
          1200,
          960,
          1450,
          1820,
          2800,
          2102,
          1920,
          3920,
          3202,
          3140,
          2800,
          3200,
          3200,
          3400,
          2910,
          3100,
          4250
        ],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Past Month",
        fill: "start",
        data: [
          380,
          430,
          120,
          230,
          410,
          740,
          472,
          219,
          391,
          229,
          400,
          203,
          301,
          380,
          291,
          620,
          700,
          300,
          630,
          402,
          320,
          380,
          289,
          410,
          300,
          530,
          630,
          720,
          780,
          1200
        ],
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderDash: [3, 3],
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
  }
};

export default UsersOverview;
