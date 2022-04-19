import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import personOne from '../../images/avatars/0.jpg'
import InputForm from "../components-overview/InputForm";

class UsersByDevice extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }



  render() {

    return (
      <Card small className="h-150">
        <CardHeader className="border-bottom d-flex mb-2" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: "flex" }}>
            <img src={personOne} style={{ height: 60, width: 60, borderRadius: 5 }} alt="" />
            <div style={{ marginLeft: 15, }}>
              <h6>Faith Olarinwaju</h6>
              <h6 style={{ marginTop: -10 }}>Active Now</h6>
            </div>
          </div>
        </CardHeader>
        <CardBody className="border-bottom" style={{ justifyContent: 'space-between' }} >
          <div style={{ display: "flex" }}>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />
            <div style={{ marginLeft: 15, }}>
              <h6 style={{ backgroundColor: "lightgray", padding: 5, borderRadius: 50 }}>Hello, folashade</h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <h6 style={{ marginRight: 10, backgroundColor: "red", color: 'white', padding: 5, borderRadius: 50 }}> hi Faith </h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />

          </div>


          <div style={{ display: "flex" }}>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />
            <div style={{ marginLeft: 15, }}>
              <h6 style={{ backgroundColor: "lightgray", padding: 5, borderRadius: 5 }}>Hello, folashade</h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <h6 style={{ marginRight: 10, backgroundColor: "red", color: 'white', padding: 5, borderRadius: 5 }}> hi Faith </h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />

          </div>

          <div style={{ display: "flex" }}>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />
            <div style={{ marginLeft: 15, }}>
              <h6 style={{ backgroundColor: "lightgray", padding: 20, borderRadius: 10 }}>Hello, folashade</h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
          </div>


          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <h6 style={{ marginRight: 10, backgroundColor: "red", color: 'white', padding: 5, borderRadius: 5 }}> hi Faith </h6>
              <p style={{ marginTop: -5 }}>9 hrs ago</p>
            </div>
            <img src={personOne} style={{ height: 30, width: 30, borderRadius: 100 }} alt="" />

          </div>

        </CardBody>
        <CardFooter>
          <Row>
            {/* <div style={{ display: 'flex', marginLeft: 150 }}>
              <Col className='text-right'>
                <button className="btn btn-outline-black">cancel</button>

              </Col>


              <Col className="text-right view-report">
                <button className="btn btn-danger">follow</button>
              </Col>
            </div> */}

            <InputForm />

          </Row>
        </CardFooter>
      </Card>
    );
  }
}

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

UsersByDevice.defaultProps = {
  title: "Users by device",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(0,123,255,0.3)"
        ]
      }
    ],
    labels: ["Desktop", "Tablet", "Mobile"]
  }
};

export default UsersByDevice;
