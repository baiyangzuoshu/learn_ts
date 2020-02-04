declare namespace   jQuery{
    function    ajax(url:string,setting?:any):void;
    const   version:number;
    class Event{
        blur(eventType:EventType):void;
    }
    
    enum    EventType{
        CustomClick
    }
}