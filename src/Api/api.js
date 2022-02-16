export const getTasks = async () => {
  try {
    const res = await fetch('http://localhost:4000/api/todos');
    const json = await res.json();
    return json.tasks;
  } catch (error) {
    return console.log(error);
  }
};
export const getTask = async id => {
  try {
    const res = await fetch('http://localhost:4000/api/todo/' + id);
    const json = await res.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const deleteTask = async id => {
  try {
    const res = await fetch('http://localhost:4000/api/todo/' + id, {
      method: 'DELETE',
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const createTask = async (title, description) => {
  try {
    const res = await fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const updateTask = async (id, title, description) => {
  try {
    console.log(title, description);
    const res = await fetch('http://localhost:4000/api/todo/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};
