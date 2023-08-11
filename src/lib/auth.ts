import { ApolloLink, HttpLink } from "@apollo/client";
import client, { authLink } from "@/lib/apollo-client";

export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  const credentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch("https://01.gritlab.ax/api/auth/signin", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("!response.ok");
      const errorData = await response.json();
      const errorMessage: string =
        errorData && errorData.message
          ? errorData.message
          : "Invalid credentials.";
      throw new Error(errorMessage);
    }

    const data = await response.json();
    localStorage.setItem("jwtToken", data);

    return data;
  } catch (error) {
    throw new Error("Invalid credentials.");
  }
};

export const useLogout = () => {
  const logout = () => {
    const newLink = ApolloLink.from([
      authLink,
      new HttpLink({
        uri: "https://01.gritlab.ax/api/auth/signout",
      }),
    ]);
    localStorage.removeItem("jwtToken");
    client.setLink(newLink);

    window.location.href = "/login";
  };

  return { logout };
};
