import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import './InfoBox.css';

function InfoBox({title, isRed, cases, active, total, ...props }) {
    return (
        <Card 
            className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}
            onClick={props.onClick}
        >
            <CardContent>
                {/* "Coroana Cases "Title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
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
