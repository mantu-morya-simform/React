import Profile from "./Profile";
import withAuth from "./withAuth";

export const WrapperComp = withAuth(Profile);
