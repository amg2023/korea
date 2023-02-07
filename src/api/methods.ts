import cache from "utils/cache";
const setFetch = async <T>(
  method: string,
  Authorization: boolean,
  body?: T
) => {
  const payload: any = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: null,
    },
    body: JSON.stringify(body),
  };
  if (Authorization) payload.headers.Authorization = await cache.get("token");
  return payload;
};

const setResult = async (res: Response, setToken: boolean = false) => {
  if (res.status === 200) {
    if (setToken) {
      localStorage.setItem("token", JSON.stringify(res.headers.get("token")));
    }
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

  const getToken = async (URL: string) => {
    const payload = await setFetch("GET", true);
    const res = await fetch(URL, payload);
    return await setResult(res);
  };

  const post = async <T>(URL: string, body: T) => {
    const payload = await setFetch("POST", true, body as any);
    const res = await fetch(URL, payload);
    return await setResult(res, true);
  };

  return {
    get,
    post,
    getToken,
  };
}
