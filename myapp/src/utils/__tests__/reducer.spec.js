import { STATUSES } from "../../constants";
import {getGistsRequest,getGistsSuccess} from "../../store/gists/actions"
import {gistsReducer} from "../../store/gists/reducer"


describe("gistsReduser testing with diffrent actions ", ()=>{
it("returns state with status loading after getGistsRequest action", () => {
    const expected = {
      gists: [],
      request: STATUSES.REQUEST,
        error: null,
    
  };

  const received = gistsReducer(undefined, getGistsRequest());
  expect(received).toEqual(expected);
})
it("returns state with status  success",()=>{
  
        const expected = {
          gists: undefined,
          request: 2,
          error: null,
        
      };
      const received = gistsReducer( undefined,getGistsSuccess());
      expect(received).toEqual(expected);
})

})
