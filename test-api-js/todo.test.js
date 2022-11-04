

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();
    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    var a = {
        tittle: "T4",
        description: "D4",
        done: false
    }

    var id = 1;

    var new_id = 2;

    var new_item = {
        tittle: "T3",
        description: "D10",
        done: false
    }


    test("add_todos", () => {
        expect(todo_service.add_todo(a).todo.length).toEqual(4);
    });
    test("delete_todos", () => {
        expect(todo_service.delete_todo(id).todo.length).toEqual(2);
    });
    test("update_todo", () => {
        expect(todo_service.update_todo(new_id, new_item).todo[2]).toEqual(new_item);
      });

});