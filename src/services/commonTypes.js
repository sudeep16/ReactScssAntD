export const init = (type) => {
  return {
    type: `${type}_INIT`,
  };
};

export const success = (type) => {
  return {
    type: `${type}_SUCCESS`,
  };
};

export const finish = (type) => {
  return {
    type: `${type}_FINISH`,
  };
};

export const fail = (type) => {
  return {
    type: `${type}_FAIL`,
  };
};
