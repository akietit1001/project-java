import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../redux/reducers/user";

const getUserStore = ({ users }) => users;

export const getUserInfo = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        return user && JSON.parse(user);
    }
};

export const useUser = () => {
    const userInfo = getUserInfo();
    const userStore = useSelector(getUserStore);
    const dispatch = useDispatch();
    if (
        userInfo &&
        Boolean(userStore) &&
        !Boolean(userStore.isLogged)
    ) {
        dispatch(signIn(userInfo));
    }
    return userStore;
};