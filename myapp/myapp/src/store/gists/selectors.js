import { STATUSES } from "../../constants";

export const selectGists = (state) => state.gists.gists;
export const selectGistsError = (state) => state.gists.error;
export const selectGistsLoading = (state) => state.gists.request === STATUSES.REQUEST;