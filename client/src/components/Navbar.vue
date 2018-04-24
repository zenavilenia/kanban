<template>
  <div class="flex-nav-container">
    <div class="flex-nav-left">
      <h1>Kanban</h1>
    </div>
    <div class="flex-nav-right">
      <button class="btn btn-primary btn-block" data-toggle="modal"
      data-target="#myModal">New Task</button>

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title" align="left">New Task</h4>
            </div>
            <div class="modal-body">
              <form class="ivu-form ivu-form-label-right">
                <div class="form-group">
                  <label class="form-title">Title</label>
                  <div class="form-group-content">
                    <div class="">
                      <i class="validate"></i>
                      <input type="text" placeholder="Task Title" class="form-control"
                      v-model="task.title">
                      </div>
                    </div>
                  </div>
                <div class="form-group">
                  <label class="form-title">Description</label>
                  <div class="form-group-content">
                    <div class="">
                      <textarea placeholder="Task Short Description" rows="2"
                      class="form-control" v-model="task.description"></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-title">Point</label>
                  <div class="form-group-content">
                    <div class="">
                      <i class="validate"></i>
                      <input type="text" placeholder="Task Point" class="form-control"
                      v-model="task.point">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-title">Assigned To</label>
                  <div class="form-group-content">
                    <div class="">
                      <i class="validate"></i>
                      <input type="text" placeholder="Assigned To" class="form-control"
                      v-model="task.assignedTo">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal"
              @click="close">Close</button>
              <button class="btn btn-primary" @click="createTask" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      task: {
        title: '',
        description: '',
        point: 0,
        assignedTo: '',
        status: 0,
      },
    };
  },
  methods: {
    createTask() {
      console.log('masuk method create task', this.task);
      this.$emit('submitTask', this.task);
      this.reset();
    },
    close() {
      this.reset();
    },
    reset() {
      this.task.title = '';
      this.task.description = '';
      this.task.point = 0;
      this.task.assignedTo = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display: block;
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

.flex-nav-container {
  margin-top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.flex-nav-left {
}

.flex-nav-right {
  margin-left: auto;
}

.modal-title {
  align: left;
}

.form-title {
  float: left;
}
</style>
