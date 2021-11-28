import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(URL).then( response => {
    let todo = response.data as Todo;
    let id = todo.id;
    let title = todo.title;
    let completed = todo.completed;

    console.log(`
        ID of todo: ${id},
        Title of todo: ${title},
        Status of todo: ${completed},
    `);
})