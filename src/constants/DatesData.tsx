import React from 'react';

export interface dataObject {
    id:number | string;
    startTime: string;
    endTime:string ;
    day?: number | undefined;
    dayType?: string | undefined
}

export  const datesData:dataObject[]=[
   {id:1,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:2,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:3,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:4,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:5,startTime:"", endTime:""},
   {id:6,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:7,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:8,startTime:"", endTime:"06:00 PM"},
   {id:9,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:10,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:11,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:12,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:13,startTime:"", endTime:"06:00 PM"},
   {id:14,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:15,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:16,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:17,startTime:"", endTime:""},
   {id:18,startTime:"", endTime:""},
   {id:19,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:20,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:21,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:22,startTime:"", endTime:""},
   {id:23,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:24,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:25,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:26,startTime:"", endTime:""},
   {id:27,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:28,startTime:"10:00 AM", endTime:"06:00 PM"},
   {id:29,startTime:"", endTime:"06:00 PM"},
   {id:30,startTime:"10:00 AM", endTime:""},
   {id:31,startTime:"10:00 AM", endTime:"06:00 PM"}

];

export const weekDays: Array<string> =[
    "MON","TUE","WEN","THU","FRI","SAT","SUN"
]
export const weekRowIndex:Array<number>=[0,7,14,21,28]