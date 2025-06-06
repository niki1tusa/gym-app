export const addPrevValues = (log: any, prevLog = null) => {
    return log.times.map((item: any, i: number)=>({
        ...item,
        prevWeight: prevLog ? prevLog.times[i].weight : 0,
        prevRepeat: prevLog ? prevLog.times[i].repeat : 0
    }))
}