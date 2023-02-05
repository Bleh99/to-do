export const project = function (addname) {
  const name = addname;
  const todos = [];

  const Todo = function (index) {
    return todos[index];
  };

  return {
    name,
    todos,
    findTodo,
  };
};

export const notifs = function (addname, time)
{
  const name = addname;
  const countdown = time;

  return setTimeout(()=>{
    new Notification("To-do reminder", {
      body: name,
    });
  }, countdown)
}

export const tasks = function (todo) {
  let priority = null;
  const dueTimeAndDate = {
    time: null,
    date: null,
  };
  const projectId = null;

  const getProjectId = function () {
    return projectId;
  };

  const addDueTimeAndDate = function (time, date) {
    dueTimeAndDate.time = time;
    dueTimeAndDate.date = date;
  };

  const setPriority = function (info) {
    priority = info;
  };

  return {
    priority,
    dueTimeAndDate,
    projectId,
    addDueTimeAndDate,
    setPriority,
    getProjectId,
  };
};

export const mainObjectBag = function () {
  const staticProject = [];
  const nonStaticProject = [];

  const getStaticProject = function () {
    return staticProject;
  };

  const getNonStaticProject = function () {
    return nonStaticProject;
  };

  const findStaticProject = function (index) {
    return staticProject[index];
  };

  const findNonStaticProject = function (index) {
    return nonStaticProject[index];
  };

  const addStaticProject = (project) => {
    staticProject.push(project);
  };

  const addNonStaticProject = function (project) {
    nonStaticProject.push(project);
  };

  return {
    getStaticProject,
    findStaticProject,
    findNonStaticProject,
    addStaticProject,
    addNonStaticProject,
    getNonStaticProject,
  };
};
