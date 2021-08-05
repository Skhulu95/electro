
import React, { useState, useEffect, useCallback } from 'react';

import CommentsList from '../comments/CommentsList';
import AddComment from '../comments/AddComment';
import '../comments/Comment.module.css';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCommentsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://electro-fd3b2-default-rtdb.firebaseio.com/comments.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedComments = [];

      for (const key in data) {
        loadedComments.push({
          id: key,
          name: data[key].name,
          commentText: data[key].commentText,
          releaseDate: data[key].releaseDate,
        });
      }

      setComments(loadedComments);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCommentsHandler();
  }, [fetchCommentsHandler]);

  async function addCommentHandler(comment) {
    const response = await fetch('https://electro-fd3b2-default-rtdb.firebaseio.com/comments.json', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no comments.</p>;

  if (comments.length > 0) {
    content = <CommentsList comments={comments} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddComment onAddComment={addCommentHandler} />
      </section>
      <section>
        <button onClick={fetchCommentsHandler}>Fetch Comments</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default CommentsPage;