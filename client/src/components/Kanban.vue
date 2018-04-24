<template>
  <div id="container">
    <Navbar @submitTask="submitTask"></Navbar>
    <div class="flex-nav-container">
      <div class="flex-nav-items">
        <div id="div-back-log">
          <p>Back-log</p>
        </div>
        <div class="list" v-for="(task,i) in listbacklog" :key="i">
          <div class="to-do">
            <div class="to-do-title">
              <p class="p-title">{{task.title}}</p>
            </div>
            <div class="to-do-detail">
              <p class="p-todo-detail">Point: {{task.point}}</p>
              <p class="p-todo-detail">Assigned To: {{task.assignedTo}}</p>
              <button class="btn btn-primary btn-sm" @click="changeDetail(task)" data-toggle="modal"
      data-target="#modalListbacklog">Show Detail</button>
            </div>
          </div>
        </div>
        <div id="modalListbacklog" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" align="center">
                  Detail Task: {{detailTask.title}} for {{detailTask.assignedTo}}</h4>
              </div>
              <div class="modal-body">
                <h4 align="left">Task Description:</h4>
                <p align="left">{{detailTask.description}}</p>
                <h4 align="left">Point :</h4>
                <p align="left">{{detailTask.point}}</p>
                <h4 align="left">Status :</h4>
                <p align="left">{{detailTask.statusCode}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default"
                @click="deleteThis" data-dismiss="modal">Delete</button>
                <button class="btn btn-primary" @click="toTodo" data-dismiss="modal">To Do</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-todo">
          <p>To-Do</p>
        </div>
        <div class="list" v-for="(task,i) in listtodo" :key="i">
          <div class="to-do">
            <div class="to-do-title">
              <p class="p-title">{{task.title}}</p>
            </div>
            <div class="to-do-detail">
              <p class="p-todo-detail">Point: {{task.point}}</p>
              <p class="p-todo-detail">Assigned To: {{task.assignedTo}}</p>
              <button class="btn btn-primary btn-sm" @click="changeDetail(task)" data-toggle="modal"
              data-target="#modalListtodo">Show Detail</button>
            </div>
          </div>
        </div>
        <div id="modalListtodo" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" align="center">
                  Detail Task: {{detailTask.title}} for {{detailTask.assignedTo}}</h4>
              </div>
              <div class="modal-body">
                <h4 align="left">Task Description :</h4>
                <p align="left">{{detailTask.description}}</p>
                <h4 align="left">Point :</h4>
                <p align="left">{{detailTask.point}}</p>
                <h4 align="left">Status :</h4>
                <p align="left">{{detailTask.statusCode}}</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" @click="toBacklog"
                data-dismiss="modal">Backlog</button>
                <button type="button" class="btn btn-default"
                @click="deleteThis" data-dismiss="modal">Delete</button>
                <button class="btn btn-primary" @click="toDoing" data-dismiss="modal">Doing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-doing">
          <p>Doing</p>
        </div>
        <div class="list" v-for="(task,i) in listdoing" :key="i">
          <div class="to-do">
            <div class="to-do-title">
              <p class="p-title">{{task.title}}</p>
            </div>
            <div class="to-do-detail">
              <p class="p-todo-detail">Point: {{task.point}}</p>
              <p class="p-todo-detail">Assigned To: {{task.assignedTo}}</p>
              <button class="btn btn-primary btn-sm" @click="changeDetail(task)" data-toggle="modal"
              data-target="#modalListdoing">Show Detail</button>
            </div>
          </div>
        </div>
        <div id="modalListdoing" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" align="center">
                  Detail Task: {{detailTask.title}} for {{detailTask.assignedTo}}</h4>
              </div>
              <div class="modal-body">
                <h4 align="left">Task Description :</h4>
                <p align="left">{{detailTask.description}}</p>
                <h4 align="left">Point :</h4>
                <p align="left">{{detailTask.point}}</p>
                <h4 align="left">Status :</h4>
                <p align="left">{{detailTask.statusCode}}</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" @click="toTodo" data-dismiss="modal">Todo</button>
                <button type="button" class="btn btn-default"
                @click="deleteThis" data-dismiss="modal">Delete</button>
                <button class="btn btn-primary" @click="toDone" data-dismiss="modal">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-done">
          <p>Done</p>
        </div>
        <div class="list" v-for="(task,i) in listdone" :key="i">
          <div class="to-do">
            <div class="to-do-title">
              <p class="p-title">{{task.title}}</p>
            </div>
            <div class="to-do-detail">
              <p class="p-todo-detail">Point: {{task.point}}</p>
              <p class="p-todo-detail">Assigned To: {{task.assignedTo}}</p>
              <button class="btn btn-primary btn-sm" @click="changeDetail(task)" data-toggle="modal"
              data-target="#modalListdone">Show Detail</button>
            </div>
          </div>
        </div>
        <div id="modalListdone" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" align="center">
                  Detail Task: {{detailTask.title}} for {{detailTask.assignedTo}}</h4>
              </div>
              <div class="modal-body">
                <h4 align="left">Task Description :</h4>
                <p align="left">{{detailTask.description}}</p>
                <h4 align="left">Point :</h4>
                <p align="left">{{detailTask.point}}</p>
                <h4 align="left">Status :</h4>
                <p align="left">{{detailTask.statusCode}}</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" @click="toDoing" data-dismiss="modal">Doing</button>
                <button type="button" class="btn btn-default"
                @click="deleteThis" data-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import Navbar from '@/components/Navbar';

const tasksRef = db.ref('tasks');

export default {
  components: {
    Navbar,
  },
  firebase: {
    tasks: tasksRef,
  },
  data() {
    return {
      detailTask: {
        id: '',
        title: '',
        description: '',
        point: 0,
        assignedTo: '',
        status: 0,
        statusCode: '',
      },
    };
  },
  methods: {
    changeDetail(task) {
      this.detailTask.id = task['.key'];
      this.detailTask.title = task.title;
      this.detailTask.description = task.description;
      this.detailTask.point = task.point;
      this.detailTask.assignedTo = task.assignedTo;
      switch (this.detailTask.status) {
        case 0:
          this.detailTask.statusCode = 'Back Log';
          break;
        case 1:
          this.detailTask.statusCode = 'To Do';
          break;
        case 2:
          this.detailTask.statusCode = 'Doing';
          break;
        case 3:
          this.detailTask.statusCode = 'Done';
          break;
        default:
          break;
      }
    },
    submitTask(newTask) {
      console.log('masuk method submit task');
      tasksRef.push(newTask)
        .then((response) => {
          console.log('ini response- ', response);
        });
    },
    toBacklog() {
      tasksRef.child(this.detailTask.id)
        .child('status')
        .set(0);
    },
    toTodo() {
      tasksRef.child(this.detailTask.id)
        .child('status')
        .set(1);
    },
    toDoing() {
      tasksRef.child(this.detailTask.id)
        .child('status')
        .set(2);
    },
    toDone() {
      tasksRef.child(this.detailTask.id)
        .child('status')
        .set(3);
    },
    deleteThis() {
      tasksRef.child(this.detailTask.id).remove();
    },
  },
  computed: {
    listbacklog() {
      return this.tasks.filter(task => task.status === 0);
    },
    listtodo() {
      return this.tasks.filter(task => task.status === 1);
    },
    listdoing() {
      return this.tasks.filter(task => task.status === 2);
    },
    listdone() {
      return this.tasks.filter(task => task.status === 3);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h4 {
  align: left;
}

button {
  background-color: #39f;
}

.detailtask {
  align: left;
}

#div-back-log {
  background-color: #f30;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-todo {
  background-color: #f90;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-doing {
  background-color: #39f;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-done {
  background-color: #0c6;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

.flex-nav-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 10px;
  flex-direction: row;
}

.flex-nav-items {
  width: 23%;
  border: 2px solid #e3e8ee;
  border-radius: 8px;
  margin: 7px;
}

.to-do {
  border: 1px solid #e3e8ee;
  margin: 7px;
  border-radius: 8px;
}

.to-do-title {
  border-bottom: 1px solid #e3e8ee;
  text-align: left;
  font-family: Helvetica;
}

.p-title {
  padding-top: 10px;
  padding-left: 10px;
  font-weight: bold;
}

.to-do-detail {
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.p-todo-detail {
  margin: 0px;
}

@media screen and (max-width: 780px) {
  .flex-nav-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 10px;
    flex-direction: row;
  }

  .flex-nav-items {
    width: 100%;
    border: 2px solid #e3e8ee;
    border-radius: 8px;
    margin: 7px;
  }

}
</style>
