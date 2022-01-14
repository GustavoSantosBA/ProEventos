using Proeventos.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento> AddEvento(Evento model);
        Task<Evento> UpdateEvento(Evento model);
        Task<bool> DeleteEvento(int EventoId);
        Task<List<Evento>> GetAllEventosByTemaAsync(string tema, bool includePalestrantes);
        Task<List<Evento>> GetAllEventosAsync(bool includePalestrantes);
        Task<Evento> GetAllEventosByIdAsync(int EventoId, bool includePalestrantes);
    }
}
