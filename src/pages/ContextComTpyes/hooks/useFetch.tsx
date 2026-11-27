import React from "react";

// posso add o tipo em elementos da função ou até de retorno apenas quando ela é chamada no codigo com os Tipos Genericos
function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);

        const response = await fetch(url, {
          signal: controller.signal,
          ...options,
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const json = (await response.json()) as T;

        if (controller.signal.aborted) return;

        setData(json);
      } catch (error) {
        if (!controller.signal.aborted && error instanceof Error) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;
