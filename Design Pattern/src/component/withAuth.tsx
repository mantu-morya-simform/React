const withAuth = (WrapperComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("user1");

    if (!isLoggedIn) {
      return <h2>Login First</h2>;
    }

    return <WrapperComponent {...props} />;
  };
};

export default withAuth;
