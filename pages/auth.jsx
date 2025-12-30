export default function Auth() {
  if (typeof window !== "undefined") {
    window.location.href = "dusha://auth";
  }
  return null;
}
