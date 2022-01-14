using Proeventos.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Persistence.Contratos
{
   public interface IPalestantePersist
    {
        Task<List<Palestrante>> GetAllPalestranteByNomeAsync(string Nome, bool includeEventos);
        Task<List<Palestrante>> GetAllPalestranteAsync(bool includeEventos);
        Task<Palestrante> GetAllPalestranteByIdAsync(int EventoId, bool includeEventos);
    }
}
