import axios from "axios";

export const postService = async (url, body, method = "POST") => {
  try {
    const resp = await axios(url, {
      method,
      data: body,
    });

    if (resp.status >= 200 && resp.status < 300) {
      return {
        isSuccess: true,
        data: resp.data,
      };
    } else {
      return {
        isSuccess: false,
        errorMessage:
          resp?.data?.error?.message || resp?.data?.error_description,
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      errorMessage:
        err?.response?.data?.error?.message ||
        err?.response?.data?.error_description,
    };
  }
};

export const getService = async (url) => {
  try {
    const resp = await axios(url, { method: "GET" });

    if (resp.status >= 200 && resp.status < 300) {
      return {
        isSuccess: true,
        data: resp.data,
      };
    } else {
      return {
        isSuccess: false,
        errorMessage: resp.data.error,
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      errorMessage: err.message,
    };
  }
};
