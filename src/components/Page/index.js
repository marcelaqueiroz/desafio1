import React from 'react';
import {Card, CardHeader, CardBody, CardTitle} from 'reactstrap';
import "../../App.css";

export default function ({ children, title }) {
    return (
        <Card className="m-4">
            <CardHeader>
                <CardTitle className="card-title">{title}</CardTitle>
            </CardHeader>
            <CardBody>
                { children }
            </CardBody>
        </Card>
    )
}