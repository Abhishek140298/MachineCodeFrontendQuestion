/*Imagine you’re given several asynchronous tasks that need to be executed, but you can only run a limited number of them concurrently. Once the concurrency limit is reached, the remaining tasks should be queued and executed only after the currently running tasks have finished.

 */

function CreateTaskQueue(cuncurrency) {
  this.cuncurrency = cuncurrency;
  this.runningCurrent = 0;
  this.queue = [];

  this.addTask = function (task) {
    return new Promise ((resolve,reject)=>{
        this.queue.push(()=>task().then(resolve).catch(reject));

    this.processQueue();

    })
  };

  this.processQueue = function () {
    if (this.runningCurrent >= this.cuncurrency || this.queue.length === 0)
      return;

    const task = this.queue.shift();
    this.runningCurrent++;
console.log("tasksfdd",task());

    task().finally(() => {
      this.runningCurrent--;
      this.processQueue();
    });
  };
}

const queue = new CreateTaskQueue(2);

function createTasks(delay, result) {
  return()=> new Promise((resolve, reject) => {
setTimeout(()=>resolve(result),delay)

  });
}

const tasks=[
queue.addTask(createTasks(2000, "Task 1")),
  queue.addTask(createTasks(7000, "Task 2")),
  queue.addTask(createTasks(1500, "Task 3")),
  queue.addTask(createTasks(500, "Task 4"))
]



Promise.all(tasks).then(console.log);

