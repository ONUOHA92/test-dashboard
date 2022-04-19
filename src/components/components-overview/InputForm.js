import React from "react";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,

} from "shards-react";

const inputForm = () => (
    <ListGroup flush>
        <ListGroupItem className="p-3">
            <Row>
                <Col>
                    <Form>
                        {/* <FormGroup>
                            <label htmlFor="feInputAddress">Address</label>
                            <FormInput id="feInputAddress" placeholder="1234 Main St" />
                        </FormGroup> */}



                        <Row form>


                            <Col md="12" sm="12" lg="12" className="form-group">
                                <FormGroup>

                                    <FormInput id="feInputAddress" placeholder="1234 Main St" />
                                </FormGroup>
                            </Col>

                        </Row>

                    </Form>
                </Col>
            </Row>
        </ListGroupItem>
    </ListGroup>
);

export default inputForm;
