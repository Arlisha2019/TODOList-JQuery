
let addButton = $("#addButton")
let taskInput = $("#taskInput")
let listItem = $("#listItem")
let checkbox = $("#checkbox")
let completedList = $("#completedList")
let completed = $("#compeleted")
let pendingList = $("#pendingList")


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

    if(input.length <= 0) {
      alert("Please Enter a Task!!")
    } else {

    let list = $(`<li class="task" id="task_${taskNum}">
      <label for="complete_${taskNum}">Completed</label>
      <input task_id="${taskNum}" id="complete_${taskNum}" type='checkbox'/>
      <label> ${input} </label>
      <button task_id="${taskNum}" id="remove_${taskNum}" class="remove">Delete</button>
    </li>`)
    $("#listItem").append(list)

    taskInput.val("")

    $(`#remove_${taskNum}`).click(function(e) {

      let taskId = e.target.getAttribute("task_id")

      $(`#task_${taskId}`).remove()
      checkEmpty()


    })
    $(`#complete_${taskNum}`).click(function(e) {

      let taskId = e.target.getAttribute("task_id")

      let selectedTask = $(`#task_${taskId}`)
      selectedTask.attr('class', 'complete')
      if(this.checked) {
        $("#completedList").append(selectedTask)
      } else {
        $("#listItem").append(selectedTask)
      }

      checkEmpty()

    })


    console.log(taskNum)
    taskNum = taskNum + 1
}
      })
  }

addTask()
