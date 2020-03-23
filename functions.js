function parse() {
  var input = document.forms['input']['workout'].value
  document.write(input)
}

var i = 1

function addExercises() {
  var number = document.getElementById("exercises" + i).value;
  var container = document.getElementById("container");

  while (container.hasChildNodes()) {
     container.removeChild(container.lastChild);
  }

  for (i=0; i<number; i++) {
    var para = document.createElement("P");
    var exercise_text = document.createTextNode("Exercise " + (i+1) + ":");
    var exercise_input = document.createElement("input");
    exercise_input.type = "text";
    var intr_text = document.createTextNode("Interval: ");
    var intr_input = document.createElement("input");
    intr_input.type = "text";
    var reps_text = document.createTextNode("Reps: ");
    var reps_input = document.createElement("input");
    reps_input.type = "text";
    para.appendChild(exercise_text);
    para.appendChild(exercise_input);
    para.appendChild(intr_text);
    para.appendChild(intr_input);
    para.appendChild(reps_text);
    para.appendChild(reps_input);
    container.appendChild(para);
    container.appendChild(document.createElement("br"));
    }
}

function addSet() {
  i += 1
  var set_text = document.createTextNode("Set " + i + ": ");
  var new_set = document.createElement("SELECT");
  new_set.setAttribute("id", "exercises" + i)
  new_set.onchange = function() { addExercises() }
  var set_container = document.getElementById("set_container");
  var empty = document.createElement("option");
  empty.text = "# of exercises";
  new_set.add(empty);
  var one = document.createElement("option");
  one.setAttribute("value", "1")
  one.text = "1";
  new_set.add(one);
  var two = document.createElement("option");
  two.setAttribute("value", "2")
  two.text = "2";
  new_set.add(two);
  var three = document.createElement("option");
  three.setAttribute("value", "3")
  three.text = "3";
  new_set.add(three);
  set_container.appendChild(set_text);
  set_container.appendChild(new_set);
  set_container.appendChild(document.createElement("br"))
}

function test() {
  document.write('hello');
}
