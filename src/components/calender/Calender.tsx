import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { weekDays, datesData, weekRowIndex, dataObject } from '../../constants/DatesData';
import Monent from 'moment';
import DateCard from '../dateCard/DateCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Calender() {
    let cDate = Monent();
    const [daysObj, setDaysObj] = useState<dataObject[]>([]);
    const [currentDate,setCurrentDate] = useState(cDate.toObject());
    const [dateValue,setDateValue] = useState<Date | null>(null);
    const [selectedMonth,setSelectedMonth]=useState<number |null>(null)
    useEffect(() => {
    let dayObject = currentDate;//Monent(currentDate).toObject();
    let currentMonth = dayObject.months + 1;
    setSelectedMonth(currentMonth);
    let startiingDay: string = `01-${currentMonth > 9 ? currentMonth : "0" + currentMonth}-${dayObject.years}`;
    let weekStarIndex: number = Monent(startiingDay, 'DD-MM-YYYY').isoWeekday() - 1;
    let currentDateDays: number = Monent(currentDate).daysInMonth();
    let daysObject: any[] = [];
        if (weekStarIndex > 0) {
            let lastMonthDays = Monent(currentDate).subtract(1, 'months').daysInMonth();
            for (let i = 0; i < weekStarIndex; i++) {
                daysObject.push({
                    id: `P${lastMonthDays - i}`,
                    day: lastMonthDays - i,
                    dayType: "P",
                    startTime: "",
                    endTime: ""
                })
            }
            daysObject.reverse();
        }
        for (let j = 0; j < currentDateDays; j++) {
            let obj = { ...datesData[j] };
            obj.id = `C${j + 1}`;
            obj.dayType = "C";
            obj.day = j + 1;
            daysObject.push(obj);
        }
        if (daysObject.length < 35) {
            let maxLimit = 36-daysObject.length;
            for (let k = 1; k < maxLimit; k++) {
                daysObject.push({
                    id: `F${k}`,
                    day: k,
                    dayType: "F",
                    startTime: "",
                    endTime: ""
                })
            }
        }

        setDaysObj(daysObject);

    }, [currentDate]);
    

    const getDateCards = (index: number) => {
        let endIndex: number = index + 7;
        let rowCells = [];
        for (let i = index; i < endIndex; i++) {
            let obj = { ...daysObj[i] };

            if (!obj.id) {
                break;
            }

            let tableCell = <TableCell key={`tabCell-${obj.id}`} >
                <DateCard key={`card${obj.id}`} id={obj.id} day={obj.day} dayType={obj.dayType} startTime={obj.startTime} endTime={obj.endTime}></DateCard>
            </TableCell>
            rowCells.push(tableCell)
        }
        return rowCells


    }
    return (
    <>
       <Box 
       sx={{
           width:'100%',
           display:'flex',
           marginTop:'5px',
           flexDirection:'row',
               textAlign:'center',
               justifyContent:'center'

       }}
       >
           <Box sx={{
               display:'flex',
               flexDirection:'row',
               textAlign:'center',
               justifyContent:'center'
           }}>
        <Typography component="div"
            variant="h6"
            gutterBottom
            sx={{
                margin:'10px',
                textAlign: 'center',
                justifyContent: "center"
            }}>
             Select the date to change the calander:
            </Typography>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date field"
        value={dateValue}
        onChange={(newValue:any) => {
          setDateValue(newValue);
          let cDt = `${newValue.getDate()<10?"0"+newValue.getDate():newValue.getDate()}-${newValue.getMonth()+1}-${newValue.getFullYear()}`
          let obj = Monent(cDt,'DD-MM-YYYY').toObject();
           setCurrentDate(obj);
        }}
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider> 
    <Typography component="div"
            variant="h6"
            gutterBottom
            sx={{
                margin:'10px',
                textAlign: 'center',
                justifyContent: "center"
            }}>
             {`Selected month:${selectedMonth}`}
            </Typography>      
        </Box>
       </Box>
        <TableContainer sx={{ width: '100%', height: '100%' }} component={Paper}>
            <Table sx={{ width: '100%', height: '100%' }}>
                <TableHead >
                    <TableRow>
                        {weekDays.map((el) => {
                            return <TableCell sx={{ flex: 1 }} key={el} >
                                <Typography
                                    component="div"
                                    variant="h4"
                                    gutterBottom
                                    sx={{
                                        flex: 1,
                                        textAlign: "center",
                                        justifyContent: "center",
                                        color: "#1a237e"
                                    }}
                                >
                                    {el}
                                </Typography>

                            </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        weekRowIndex.map((item) => {
                            return <TableRow key={item + 1}>
                                {getDateCards(item)}
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>


        </TableContainer>
        </>
    )
}
