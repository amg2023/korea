import axios from "axios";
const setFetch = async <T>(method: string, body?: T) => {
  const payload: any = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  };
  if (body) payload.body = JSON.stringify(body);
  return payload;
};

const setResult = async (res: Response, setToken: boolean = false) => {
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
};
export default function Api() {
  const get = async (URL: string) => {
    const payload = await setFetch("GET", false);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const post = async <T>(URL: string, body: T) => {
    const payload = await setFetch("POST", body);
    const res = await fetch(URL, payload);
    return await setResult(res, true);
  };

  return {
    get,
    post,
  };
}
