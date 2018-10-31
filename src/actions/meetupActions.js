import { GET_MEETUPS, GET_MEETUP } from "./types";
import axios from "axios";

export const getMeetups = () => async dispatch => {
  const res = await axios.get(
    `https://nameless-everglades-31188.herokuapp.com/meetups`
  );
  dispatch({
    type: GET_MEETUPS,
    payload: res.data
  });
};

export const getMeetup = id => async dispatch => {
  const res = await axios.get(
    `https://nameless-everglades-31188.herokuapp.com/${id}`
  );
  dispatch({
    type: GET_MEETUP,
    payload: res.data
  });
};
