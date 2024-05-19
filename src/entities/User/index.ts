import type { User, UserSchema } from "./modal/types/userSchema";
import { userReducer, userActions } from "./modal/slice/userSlice";
import { getUserAuthData } from "./modal/selectors/getUserAuthData/getUser";

export {
    User,
    UserSchema,
    userReducer,
    userActions,
    getUserAuthData,
};
