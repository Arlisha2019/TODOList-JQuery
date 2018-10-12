
let addButton = $("#addButton")
let taskInput = $("#taskInput")
let listItem = $("#listItem")
let checkbox = $("#checkbox")

var taskNum = 0

function checkEmpty() {

  var completedTasks = $(".complete")
  if(completedTasks.length == 0) {
    $('#completedTitle').hide()
  } else {
    $('#completedTitle').show()
  }
}
checkEmpty()

function addTask() {

  $("#addButton").click(function() {

    let input = taskInput.val()

    let list = $(`<li class="task" id="task_${taskNum}">
      <label for="complete_${taskNum}">Completed</label>
      <input task_id="${taskNum}" id="complete_${taskNum}" type='checkbox' />
      <label> ${input} </label>
      <button task_id="${taskNum}" id="remove_${taskNum}">Delete</button>
    </li>`)
    $("#listItem").append(list)

    $(`#remove_${taskNum}`).click(function(e) {

      let taskId = e.target.getAttribute("task_id")

      $(`#task_${taskId}`).remove()
      checkEmpty()


    })
    $(`#complete_${taskNum}`).click(function(e) {

      let taskId = e.target.getAttribute("task_id")

      let selectedTask = $(`#task_${taskId}`)
      selectedTask.attr('class', 'complete')
      $("#completedList").prop('check', this.checked).append(selectedTask);

      checkEmpty()
    })




    console.log(taskNum)
    taskNum = taskNum + 1

  })

}


addTask()
