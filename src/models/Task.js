const Task = class {
    constructor(id, title, date, isDone) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.isDone = isDone;
    };
};

export default Task;