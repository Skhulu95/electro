import React, { useState, useEffect, useCallback } from 'react';

import TestimoniesList from '../TestimoniesList';
import AddTestimony from '../AddTestimony';

function Testimonies() {
  const [testimoniess, setTestimonies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTestimoniesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://electro-fd3b2-default-rtdb.firebaseio.com/Testimonies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedTestimonies = [];

      for (const key in data) {
        loadedTestimonies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setTestimonies(loadedTestimonies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTestimoniesHandler();
  }, [fetchTestimoniesHandler]);

  async function addTestimonyHandler(testimony) {
    const response = await fetch('https://electro-fd3b2-default-rtdb.firebaseio.com/Testimonies.json', {
      method: 'POST',
      body: JSON.stringify(testimony),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no Testimonies.</p>;

  if (testimoniess.length > 0) {
    content = <TestimoniesList Testimonies={Testimonies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <br/>
      <br/>
      <br/>
      <section>
        <AddTestimony onAddTestimony={addTestimonyHandler} />
      </section>
      <section>
        <button onClick={fetchTestimoniesHandler}>Fetch Testimonies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Testimonies;
