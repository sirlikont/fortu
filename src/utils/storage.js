export function getUser() {
  const email = localStorage.getItem("userEmail");
  if (!email) return null;
  return { email };
}


