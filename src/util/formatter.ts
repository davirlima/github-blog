import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatDistanceToNow = (date: string | Date) => {
  let newDate: Date;
  if (typeof date === "string") {
    newDate = new Date(date);
  } else {
    newDate = date;
  }

  const dateFormatted = formatDistanceToNow(newDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return dateFormatted;
};
