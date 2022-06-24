import { useEffect, useState } from "react";

type BoredObject = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: number;
  accessibility: number;
};

const BoredAPI = () => {
  const [data, setData] = useState<BoredObject>();
  const [activityType, setActivityType] = useState("");

  const fetchActivity = () => {
    console.count("fetchActivity");

    fetch(`http://www.boredapi.com/api/activity`)
      .then(response => response.json()
      )
      .then(res => setData(res));
  };

  const fetchByActivityType = () => {
    console.count("fetchByActivityType");

    fetch(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchActivity();
    console.count("use effect");
  }, []);
  return (
    <>
      <p>
        <strong>Activity: </strong>
        {data?.activity}
      </p>
      <p>
        <strong>Type:</strong> {data?.type}
      </p>
      <p>
        <strong>Participants:</strong> {data?.participants}
      </p>
      <p>
        <strong>Price:</strong> {data?.price}
      </p>
      <label htmlFor="type">Filter by type: </label>
      <select id="type" onChange={(e) => setActivityType(e.target.value)}>
        <option value="">select type...</option>
        <option value="education">education</option>
        <option value="recreational">recreational</option>
        <option value="social">social</option>
        <option value="diy"> diy</option>
        <option value="charity">charity</option>
        <option value="cooking">cooking</option>
        <option value="relaxation">relaxation</option>
        <option value="music">music</option>
        <option value="busywork">busywork</option>
      </select>
      <button
        onClick={activityType === "" ? fetchActivity : fetchByActivityType}
      >
        New Activity
      </button>
    </>
  );
};

export default BoredAPI;
