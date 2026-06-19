/**
 *Requirements:

* Create a custom hook `useFetch`.
* Accept the following parameters:

  * `url` (required)
  * `method` (GET | POST | PUT | PATCH | DELETE)
  * `payload` (optional)
  * `skip` (optional boolean)

Hook should return:

* `isLoading`
* `response`
* `error`

API:

* https://jsonplaceholder.typicode.com/

React App:

* Demonstrate fetching data using `useFetch`.
* Show loading state.
* Show error state.
* Display fetched data.
* Demonstrate the `skip` flag functionality.

Expected Result:

* Reusable `useFetch` hook.
* Supports all HTTP methods.
* Prevents API calls when `skip` is true.
* Returns loading, response, and error states correctly.
* Working React application showcasing the hook.

 */

import { useEffect, useState } from "react";

type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type ResponseType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useFetch = (
  url: string,
  method: MethodType = "GET",
  payload?: unknown,
  skip: boolean = false,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ResponseType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (skip) return;
    const control = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const resp = await fetch(url, {
          method: method,
          body: payload ? JSON.stringify(payload) : undefined,
          signal: control.signal,
        });
        if (!resp.ok) {
          throw new Error(`HTTP Error: ${resp.status}`);
        }
        const respData: ResponseType[] = await resp.json();
        setData(respData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => control.abort();
  }, [url, method, payload, skip]);

  return { data, isLoading, error };
};

export default useFetch;
