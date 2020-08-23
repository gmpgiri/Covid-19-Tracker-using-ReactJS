import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import './InfoBox.css';

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* "Coroana Cases "Title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infoBox__cases">{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">
                {total} Total
                </Typography>
                {/* 120,000 Number of Cases */}
                {/* 3Million Total Cases */}
            </CardContent>
        </Card>
    )
}

export default InfoBox
