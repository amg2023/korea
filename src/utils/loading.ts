import cache from "./cache";

export const loadingGLTF = (xhr: ProgressEvent<EventTarget>, name: string) => {
  console.log(xhr.total, xhr.loaded);
  const total = cache.get("total");
  const several = cache.get("several");
  cache.set("several", { ...several, [name]: xhr.loaded });
  cache.set("total", { ...total, [name]: xhr.total });
  console.log(total, several);
};
