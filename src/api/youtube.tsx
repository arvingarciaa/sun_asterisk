const KEY = "AIzaSyA_JVcoI3Euk120dfbHfV7KnouXP549hGA";

export default async function getData(data: Array){
  const response = await fetch(url, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}