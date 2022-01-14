import { Lote } from "./Lote";
import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
  id: number;
  local: string;
  dataEvento: string | null;
  tema: string;
  qtdPessoas: number;
  imagemURL: string;
  telefone: string;
  email: string;
  lote: Lote[];
  redeSocial: RedeSocial[];
  palestranteEventos: PalestranteEvento[];
}
