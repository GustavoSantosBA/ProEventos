import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Palestrantes {
  id: number;
  nome: string;
  miniCurriculo: string;
  imagemUrl: string;
  telefone: string;
  email: string;
  redeSocial: RedeSocial[];
  palestranteEventos: PalestranteEvento[];
}
