const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const content = document.querySelector('#summary').value;
  const date = document.querySelector('#post-date').value;

  console.log(title);
  console.log(content);

  try {
    await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        date,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    document.location.replace('/dashboard');
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
