const URL = 'https://services-ten.vercel.app/menu';

export const getNavList = () => {
  return fetch(
    URL,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  .then(res => res.json())
};