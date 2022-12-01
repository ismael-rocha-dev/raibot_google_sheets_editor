export default function getMonthName() {
  const todayDate = new Date();

  const monthIndex = todayDate.getMonth();

  const months = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  const month = months[monthIndex];

  return month;
}
