/*  
    This script is about export log data to CSV formmat file 
    Script when "Press" event

    -------------Folder---------------
    SD-X51: SD card inserted in SD card slot DATA "X51"
        – Folder: Storage directory on storage device
    USB-X61: USB storage device connected to USB interface "X61"
        – Folder: Storage directory on storage device
    USB-X62: USB storage device connected to USB interface "X62"
        – Folder: Storage directory on storage device
*/
export function exportTagLogAsCSV_OnDown(item, x, y, modifiers, trigger){

    //Set File name
    let fileName = "USB-61:\\LogFile.csv";

    //Set start end time for log data
    let start = new Date("2024-01-01T00:00:00Z");
    let end = new Date("2024-01-01T23:59:59Z");

    //Set the delimiter for CSV file
    let delimiter =";";

    let csvData ="Name" + delimiter +"Timestamp" + delimiter +"Value" + delimiter +"Quelity\n";
    let tag1 = HMIRuntime.Taglooging.LoggedTags("RewinderOP_2::DB_ActualValue_HMI_Interface_LengthCalculate_RewinderLength:LoggingTag_1");
    HMIRuntime.Trace("TagName : "+tag1.Name);
    let tagValue = tag1.Read(start, end, 0);
    tagValue.then((loggedTagResult)=>{
        let error = loggedTagResult.Error;
        let tagArray = loggedTagResult.Values;
        for(let loggedTag of tagArray)
            csvData += tag1.Name + delimiter + loggedTag.TimeStamp + delimiter + loggedTag.Value + delimiter + loggedTag.Quality +"\n";
    })
    
}