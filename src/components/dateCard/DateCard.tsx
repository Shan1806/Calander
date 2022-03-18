import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { red, blue, grey, purple, yellow } from '@mui/material/colors';

interface itemProps {
    id: string | number;
    day?: number;
    dayType?: string;
    startTime?: string;
    endTime?: string;
}
export default function DateCard(props: itemProps) {
    const { id, day, dayType, startTime, endTime } = props;


    const [cardStyle, setCardStyle] = useState({
        cBgcolor: "#e0e0e0",
        cborderColor: "#757575",
        cTColor: "#212121"
    })
    useEffect(() => {
        if (dayType == "C") {
            let sObj = {
                cBgcolor: blue[300],
                cborderColor: blue[600],
                cTColor: blue[900]
            }
            setCardStyle(sObj);

        } else {
            let sObj = {
                cBgcolor: grey[300],
                cborderColor: grey[600],
                cTColor: grey[900]
            }
            setCardStyle(sObj);
        }

        if (dayType == "C" && (!startTime || !endTime)) {
            let sObj = {
                cBgcolor: red[300],
                cborderColor: red[600],
                cTColor: red[900]
            }
            setCardStyle(sObj);
        }
    }, []);
    return (<Box
        sx={{
            p: 1,
            m: 1,
            bgcolor: (theme) => cardStyle.cBgcolor,
            border: '1px solid',
            borderColor: (theme) => cardStyle.cborderColor,
            color: (theme) => cardStyle.cTColor,
            borderRadius: 2,
            fontSize: "1ream",
            fontWeight: "900",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "150px"
        }} key={id}>
        <Typography
            component="div"
            variant="h4"
            gutterBottom
            sx={{
                flex: 1,
                textAlign: "center",
                justifyContent: "center"
            }}
        >
            {day}
        </Typography>
        <Typography
            component="div"
            variant="subtitle1"
            gutterBottom
            sx={{
                flex: 1,
                textAlign: 'center',
                justifyContent: "center"
            }}
        >
            {startTime ? `Start time ${startTime}` : ""}
        </Typography>
        <Typography
            component="div"
            variant="subtitle1"
            gutterBottom
            sx={{
                flex: 1,
                textAlign: 'center',
                justifyContent: "center"
            }}
        >
            {endTime ? `End time ${endTime}` : ""}
        </Typography>
    </Box>)

}
