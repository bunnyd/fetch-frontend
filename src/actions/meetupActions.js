import { GET_MEETUPS, GET_MEETUP } from "./types";
import axios from "axios";

const base_url = "https://nameless-everglades-31188.herokuapp.com";

export const getMeetups = () => async dispatch => {
  const res = await axios.get(`http://localhost:3000/meetups`);
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
