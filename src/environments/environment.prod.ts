export const environment = {
  production: true,
  // @ts-ignore lol
  end_time: +window["env"]["END_TIME"] || 0
};
