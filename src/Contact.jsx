import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <Container fluid className="p-5 mt-5">
            {/* Contact Heading */}
            <Row className="mb-4">
                <Col md={6}>
                    <h1 className="fw-bold">CONTACT US</h1>
                    <p className="text-muted">Stock up your inventory levels on a quarterly basis</p>

                    {/* Buttons Section */}
                    <div className="d-grid gap-3">
                        <Button variant="primary" className="p-3 fw-bold">
                            I am a Seller →
                            <p className="mb-0 fw-normal" style={{ fontSize: '14px' }}>
                                Stock up your inventory levels on a quarterly basis
                            </p>
                        </Button>

                        <Button variant="light" className="p-3 fw-bold border">
                            I am an Enterprise →
                            <p className="mb-0 fw-normal" style={{ fontSize: '14px' }}>
                                Stock up your inventory levels on a quarterly basis
                            </p>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4">
                        <h5 className="fw-bold">EMAIL A BRIEF</h5>
                        <p className="text-primary fw-bold">hello@daintreetech.com</p>

                        <h5 className="fw-bold mt-3">SPEAK WITH AN EXPERT</h5>
                        <p className="fw-bold">+01 1234 4556</p>

                        <h5 className="fw-bold mt-3">FIND US AT</h5>
                        <p className="fw-bold text-primary">
                            12-14/3 #104, Asian Sun City, Behind Amb Mall, Kothaguda, Hyderabad, Telangana, 500084
                        </p>
                        <a href="#" className="text-decoration-underline">View on maps</a>
                    </div>
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

                        {/* Form Fields */}
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

                        {/* Contact Preference */}
                        <h5 className="fw-bold mt-4">I'd like to be contacted by</h5>
                        {['Phone', 'Email', 'No preference'].map((option, index) => (
                            <Form.Check key={index} type="radio" name="contactMethod" label={option} className="mb-2" />
                        ))}

                        {/* Submit Button */}
                        <Button type="submit" variant="primary" className="mt-3 w-100 py-2 fw-bold">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
