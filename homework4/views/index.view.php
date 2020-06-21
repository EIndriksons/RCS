<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">

    <title>Todo App</title>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-light bg-light border">
        <span class="navbar-brand">Todo App</span>
    </nav>

    <main class="container mt-4">

        <div class="row">
            <form class="col-12" method="POST" action="tasks/add.php">
                <div class="form-group">
                    <label for="text">Task description</label>
                    <input id="text" class="form-control" type="text" name="text" required>
                </div>
                <button class="btn btn-secondary" type="submit" name="addNewTask">Add Task</button>
            </form>
        </div>

        <div class="row mt-4">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($tasks as $task) : ?>
                        <tr>
                            <form method="POST" action="tasks/update.php">
                                <td width="100"><?= $task['id'] ?></td>
                                <td>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="text" value="<?= $task['text'] ?>" aria-label="" aria-describedby="basic-addon1">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="submit" name="updateTask" value=<?= $task['id'] ?>>Update</button>
                                        </div>
                                    </div>
                                </td>
                                <td width="100">
                                    <a href="tasks/delete.php?id=<?= $task['id'] ?>" class="btn btn-success">Complete</a>
                                </td>
                            </form>
                        </tr>
                    <?php endforeach; ?>
                <tbody>
            <table>
        </div>
    </main>
</body>
</html>