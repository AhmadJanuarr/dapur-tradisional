/* eslint-disable @typescript-eslint/no-explicit-any */
export const initialState = { isLoading: false }

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true }
    case "STOP_LOADING":
      return { ...state, isLoading: false }
    case "UPDATE_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
}
