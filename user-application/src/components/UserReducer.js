export const User = {
  id: 1,
  name: "swapna",
  role: "trainer",
  status: "offline",
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "select1":
      return {
        id: 1,
        name: "swapna",
        role: "admin",
        status: "online",
      };

    case "select2":
      return {
        id: 2,
        name: "raj",
        role: "developer",
        status: "busy",
      };

    case "changeName":
      return {
        ...state,
        name: action.payload,
      };

    case "changeRole":
      return {
        ...state,
        role: action.payload,
      };

    case "turnOffline":
      return {
        ...state,
        status: "offline",
      };

    case "turnOnline":
      return {
        ...state,
        status: "online",
      };

    default:
      return state;
  }
};