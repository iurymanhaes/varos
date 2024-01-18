export const formattedTell = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  let formattedValue = value
    .replace(/\D+/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
  return formattedValue;
};
