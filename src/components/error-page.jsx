import { useRouteError } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to={`/home`}>
          <i>URL IS NOT VALID GO TO HOME</i>
        </Link>
      </p>
    </div>
  );
};
