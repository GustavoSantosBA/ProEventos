import { Evento } from "./Evento";
import { Palestrantes } from "./Palestrantes";

export interface RedeSocial {
  id: number;
  nome: string;
  uRL: string;
  eventoId: number;
  evento: Evento;
  palestranteId: number | null;
  palestrante: Palestrantes;
}
