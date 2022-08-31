export const environment = {
  production: true,
  // @ts-ignore lol
  end_time: +window["env"]["END_TIME"] || 0,
  // @ts-ignore
  title: window["env"]["TITLE"] || ""
};
