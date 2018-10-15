import {
  GET_MEETUPS,
  DELETE_MEETUP,
  ADD_MEETUP,
  GET_MEETUP,
  UPDATE_MEETUP
} from "./types";
import axios from "axios";

export const getMeetups = () => async dispatch => {
  const res = await axios.get("http://localhost:3000/meetups");
  dispatch({
    type: GET_MEETUPS,
    payload: res.data
  });
};

export const getMeetup = id => async dispatch => {
  const res = await axios.get(`http://localhost:3000/meetups/${id}`);
  dispatch({
    type: GET_MEETUP,
    payload: res.data
  });
};

export const deleteMeetup = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_MEETUP,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_MEETUP,
      payload: id
    });
  }
};

export const addMeetup = meetup => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    meetup
  );
  dispatch({
    type: ADD_MEETUP,
    payload: res.data
  });
};

export const updateMeetup = meetup => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${meetup.id}`,
    meetup
  );
  dispatch({
    type: UPDATE_MEETUP,
    payload: res.data
  });
};
