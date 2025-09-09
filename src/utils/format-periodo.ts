export const formatPeriodo = (value: number) => {
  const horas = Math.floor(value / 3600);
  const minutos = Math.floor((value % 3600) / 60);
  const segundosRestantes = value % 60;

  return `${String(horas).padStart(2, "0")}h${String(minutos).padStart(
    2,
    "0"
  )}m${String(segundosRestantes).padStart(2, "0")}s`;
};

export const formatTotal = (
  horas: number,
  minutos: number,
  segundos: number
) => {
  return `${String(horas).padStart(2, "0")}h${String(minutos).padStart(
    2,
    "0"
  )}m${String(segundos).padStart(2, "0")}s`;
};
