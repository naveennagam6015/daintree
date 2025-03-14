import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

export default function Contact() {
    const sellerOptions = [
        'Bulk Procurement for E-commerce',
        'Sourcing Premium Electronics',
        'Wholesale Consumer Electronics',
        'IT & Networking Equipment',
        'Gaming & Accessories for Retail',
        'Home & Kitchen Appliances for Online Sales',
        'Security & Surveillance Products for Distribution',
        'Authorized Reseller & Distribution Partnership',
        'Dropshipping & Marketplace Fulfillment',
        'Other',
    ];

    const enterpriseOptions = [
        'IT Hardware for My Firm',
        'High-Speed Computer Processors',
        'Security Devices for My Workplace',
        'Appliances for Office Use',
        'Gaming Equipment Setups',
        'General Consumer Electronics',
        'Office & Business Laptops/Desktops/Monitors',
        'Smart Office Automation',
        'Networking & Server Solution',
        'Other',
    ];

    const [checkboxOptions, setCheckboxOptions] = useState(sellerOptions);
    // const [checkboxHeading, setCheckboxHeading] = useState("I am looking for *");
    const [selectedButton, setSelectedButton] = useState('seller');

    return (
        <Container fluid className="p-5">
            <Row className="d-flex align-items-start">
                <Col md={6} className="p-5 ">
                    <h1 className="fw-bold font56">CONTACT US</h1>
                    <p className="font24 fontw400">Stock up your inventory levels on a quarterly basis</p>

                    <div className="d-grid gap-3 mt-47 w-75">
                        <Button
                            variant={selectedButton === 'seller' ? 'primary' : 'light'}
                            className="p-3 fw-bold border shadow font32 align-items-center "
                            onClick={() => {
                                setCheckboxOptions(sellerOptions);
                                // setCheckboxHeading("I am looking for as a Seller *");
                                setSelectedButton('seller');
                            }}
                        >
                            I am a Seller <i class="bi bi-arrow-right-short "></i>
                            <p className="mb-0 fw-normal font16" style={{ fontSize: '14px' }}>
                                Stock up your inventory levels on a quarterly basis
                            </p>
                        </Button>

                        <Button
                            variant={selectedButton === 'enterprise' ? 'primary' : 'light'}
                            className="p-3 fw-bold border shadow font32 align-items-center "
                            onClick={() => {
                                setCheckboxOptions(enterpriseOptions);
                                // setCheckboxHeading("I am looking for as an Enterprise *");
                                setSelectedButton('enterprise');
                            }}
                        >
                            I am an Enterprise <i class="bi bi-arrow-right-short "></i>
                            <p className="mb-0 fw-normal font16" style={{ fontSize: '14px' }}>
                                Stock up your inventory levels on a quarterly basis
                            </p>
                        </Button>
                    </div>

                    <div className="mt-50">
                        <h5 className="fw-bold font20 fontblack letter15">EMAIL A BRIEF</h5>
                        <p className=" fw-bold font32 fontw700 underline">hello@daintreetech.com</p>

                        <h5 className="fw-bold mt-3 font20 fontblack letter15">SPEAK WITH AN EXPERT</h5>
                        <p className="fw-bold font32 fontw700 underline">+01 1234 4556</p>

                        <h5 className="fw-bold mt-3 font20 letter15">FIND US AT</h5>
                        <p className="fw-bold fontw700 font32 underline">
                            12-14/3 #104, Asian Sun City, Behind Amb Mall, Kothaguda, Hyderabad, Telangana, 500084
                        </p>
                        <a href="#" className="fontblack  underline letterspace font16">View on maps</a>
                    </div>
                </Col>

                <Col md={6} className="p-5">
                    <Form>
                        <h5 className="fw-bold">I am looking for</h5>
                        {/* <h5 className="fw-bold">{checkboxHeading}</h5> */}
                        {checkboxOptions.map((option, index) => (
                            <Form.Check key={index} type="checkbox" label={option} className="mb-2 font20 fontblack" />
                        ))}

                        <Row className="mt-3">
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Your Name *</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Your Email *</Form.Label>
                                    <Form.Control type="email" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Company Name *</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Phone Number *</Form.Label>
                                    <Form.Control type="tel" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mt-3">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={4} required />
                        </Form.Group>

                        <h5 className="fw-bold mt-4">I'd like to be contacted by</h5>
                        {['Phone', 'Email', 'No preference'].map((option, index) => (
                            <Form.Check key={index} type="radio" name="contactMethod" label={option} className="mb-2" />
                        ))}

                        <Button type="submit" variant="primary" className="mt-3 w-25 py-2 fw-bold">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
