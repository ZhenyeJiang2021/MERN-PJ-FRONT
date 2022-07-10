import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user)
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}

// export const register = async (dispatch, user) => {
//   if(user.password !== user.confirmPassword){
//   }else{
//     try {
//       const res = await publicRequest.post("/auth/register", user);
//       const navigate = useNavigate()
//       console.log(res);
//       navigate("/")
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
