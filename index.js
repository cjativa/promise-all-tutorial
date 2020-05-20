import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const Application = () => {
  const [timing1, setTiming1] = useState(null);
  const [timing2, setTiming2] = useState(null);

  const programQuoteUrl =
    "https://programming-quotes-api.herokuapp.com/quotes/random";

  const fetchingWithoutPromiseAll = async () => {
    // Here we're awaiting for each of the programming quotes sequentially
    const programmingQuote1 = await fetch(programQuoteUrl);
    const programmingQuote2 = await fetch(programQuoteUrl);
    const programmingQuote3 = await fetch(programQuoteUrl);
    const programmingQuote4 = await fetch(programQuoteUrl);
    const programmingQuote5 = await fetch(programQuoteUrl);
    const programmingQuote6 = await fetch(programQuoteUrl);
    const programmingQuote7 = await fetch(programQuoteUrl);
    const programmingQuote8 = await fetch(programQuoteUrl);
    const programmingQuote9 = await fetch(programQuoteUrl);
    const programmingQuote10 = await fetch(programQuoteUrl);
  };

  const fetchingWithPromiseAll = async () => {
    // Here we're setting up the requests for the programming quotes
    const programmingQuote1 = fetch(programQuoteUrl);
    const programmingQuote2 = fetch(programQuoteUrl);
    const programmingQuote3 = fetch(programQuoteUrl);
    const programmingQuote4 = fetch(programQuoteUrl);
    const programmingQuote5 = fetch(programQuoteUrl);
    const programmingQuote6 = fetch(programQuoteUrl);
    const programmingQuote7 = fetch(programQuoteUrl);
    const programmingQuote8 = fetch(programQuoteUrl);
    const programmingQuote9 = fetch(programQuoteUrl);
    const programmingQuote10 = fetch(programQuoteUrl);

    // Store them in a list
    const listOfRequests = [
      programmingQuote1,
      programmingQuote2,
      programmingQuote3,
      programmingQuote4,
      programmingQuote5,
      programmingQuote6,
      programmingQuote7,
      programmingQuote8,
      programmingQuote9,
      programmingQuote10
    ];

    // Here we're awaiting for each of the programming quotes in parallel
    await Promise.all(listOfRequests);
  };

  useEffect(() => {
    const performTimings = async () => {
      // Time the fetches without Promise.all
      const startTime1 = Date.now();
      await fetchingWithoutPromiseAll();
      const endTime1 = Date.now();

      // Get the total time in seconds
      const totalTime1 = (endTime1 - startTime1) / 1000;

      // Time the fetches with Promise.all
      const startTime2 = Date.now();
      await fetchingWithPromiseAll();
      const endTime2 = Date.now();

      // Get the total time in seconds
      const totalTime2 = (endTime2 - startTime2) / 1000;

      setTiming1(totalTime1);
      setTiming2(totalTime2);
    };

    // Execute the timing
    performTimings();

  }, []);

  if (timing1 && timing2) {
    return (
      <div>
        <p>Total time it took to fetch 10 programming quotes without Promise.all: <strong>{timing1} seconds</strong></p>
        <p>Total time it took to fetch 10 programming quotes with Promise.all: <strong>{timing2} seconds</strong></p>
      </div>
    )
  } else {
    return "Performing timings";
  }
};

render(<Application />, document.getElementById("root"));
