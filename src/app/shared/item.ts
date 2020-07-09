export interface Item {
    taskname: string;
    status: 'ToDo'|'InProgress'|'Resolved';
    descr: string ;
    date: string;
    priority: 'Hight'|'Medium'|'Low';
    editable: boolean;
}
