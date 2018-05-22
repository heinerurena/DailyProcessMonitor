import { DateTime } from "ionic-angular/components/datetime/datetime";

export interface InterfaseStatus {
       source: string,
       status: number,
       startTime:Date,
       endTime: Date,
       lastTimeExecution:number,
       numberOfExecutions: number,
       numberOfMessage: number
       enterfaseEvent: string,
       eventColor: string 
}
