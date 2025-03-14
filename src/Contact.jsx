import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <Container className="mt-5">
            {/* Contact Heading */}
            <Row className="mb-4">
                <Col>
                    <h1 className="fw-bold text-uppercase">Contact Us</h1>
                    <p className="text-muted">Stock up your inventory levels on a quarterly basis</p>
                </Col>
            </Row>

            {/* Buttons */}
            <Row className="mb-4">
                <Col md={6}>
                    <Button variant="primary" className="w-100 py-3 fs-5">
                        I am a Seller →
                    </Button>
                </Col>
                <Col md={6}>
                    <Button variant="outline-primary" className="w-100 py-3 fs-5">
                        I am an Enterprise →
                    </Button>
                </Col>
            </Row>

            {/* Contact Info */}
            <Row className="mb-4">
                <Col md={6} className="mb-4">
                    <h5 className="fw-bold">Email a Brief</h5>
                    <p className="text-primary fw-bold">hello@daintreetech.com</p>

                    <h5 className="fw-bold mt-3">Speak With an Expert</h5>
                    <p className="fw-bold">+01 1234 4556</p>

                    <h5 className="fw-bold mt-3">Find Us At</h5>
                    <p className="fw-bold text-primary">
                        12-14/3 #104, Asian Sun City, Behind Amb Mall, Kothaguda, Hyderabad, Telangana, 500084
                    </p>
                    <a href="#" className="text-decoration-underline">View on maps</a>
                </Col>

                {/* Contact Form */}
                <Col md={6}>
                    <Form>
                        <h5 className="fw-bold">I am looking for *</h5>
                        {[
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
                        ].map((option, index) => (
                            <Form.Check key={index} type="checkbox" label={option} className="mb-2" />
                        ))}

                        <Row className="mt-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Your Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Your Email *</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Company Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Enter company name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Phone Number *</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter phone number" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mt-3">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Type your message" required />
                        </Form.Group>

                        <h5 className="fw-bold mt-4">I'd like to be contacted by</h5>
                        {['Phone', 'Email', 'No preference'].map((option, index) => (
                            <Form.Check key={index} type="radio" name="contactMethod" label={option} className="mb-2" />
                        ))}

                        <Button type="submit" variant="primary" className="mt-3 w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
