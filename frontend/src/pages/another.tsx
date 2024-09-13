import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function AnotherPage() {
  const { getToken } = useAuth();

  useEffect(() => {
    const getSomething = async () => {
      const token = await getToken();
      const response = await fetch("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();

      console.log(data);
    };

    getSomething();
  }, []);

  return <div>AnotherPage</div>;
}
