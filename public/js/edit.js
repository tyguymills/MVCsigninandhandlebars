const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const content = document.querySelector('#summary').value;
  const date = document.querySelector('#post-date').value;

  try {
    await fetch(`/api/blog/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
        date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.replace('/dashboard');
  } catch (err) {
    console.log(err);
  }
};

const deleteClickHandler = async function() {
  try {
    await fetch(`/api/blog/${postId}`, {
      method: 'DELETE'
    });

    document.location.replace('/dashboard');
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('#edit-blog-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);
