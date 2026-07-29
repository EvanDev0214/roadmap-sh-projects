const helpCommand = () => {
  console.log(`Usage: task-cli <command> [arguments]

Commands:
  add <description>              Add a new task
  update <id> <description>      Update a task
  delete <id>                    Delete a task
  mark-in-progress <id>          Mark a task as in progress
  mark-done <id>                 Mark a task as done
  list [status]                  List tasks (optionally filter by status)

Options:
  -h, --help                     Show this help message
  -v, --version                  Show version`);
};

export default helpCommand;
