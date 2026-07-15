function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <p>Not Authenticated</p>;
    }
    return <WrappedComponent {...props} />;
  };
}
export default withAuth;
