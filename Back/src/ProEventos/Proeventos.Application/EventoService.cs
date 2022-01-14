using Proeventos.Application.Contratos;
using Proeventos.Domain;
using Proeventos.Domain.Contratos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Application
{
    public class EventoService : IEventoService
    {
        private readonly IGeralPersist _geralPersist;
        private readonly IEventoPersist _eventoPersist;
        public EventoService(IGeralPersist geralPersist, IEventoPersist eventoPersist)
        {
            _geralPersist = geralPersist;
            _eventoPersist = eventoPersist;
        }
        public async Task<Evento> AddEvento(Evento model)
        {
            try
            {
                _geralPersist.Add(model);
                if (await _geralPersist.SaveChangesAsync()) { return model; }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeleteEvento(int EventoId)
        {
            try
            {
                var evento = await _eventoPersist.GetAllEventosByIdAsync(EventoId, false);
                if (evento == null) { throw new Exception("Evento não encontrado !!!"); }
                _geralPersist.Detele(evento);
                return await _geralPersist.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento> UpdateEvento(Evento model)
        {
            try
            {
                _geralPersist.Update(model);
                if (await _geralPersist.SaveChangesAsync()) { return model; }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<List<Evento>> GetAllEventosAsync(bool includePalestrantes)
        {
            return await _eventoPersist.GetAllEventosAsync(includePalestrantes);
        }

        public async Task<Evento> GetAllEventosByIdAsync(int EventoId, bool includePalestrantes)
        {
            return await _eventoPersist.GetAllEventosByIdAsync(EventoId, includePalestrantes);
        }

        public async Task<List<Evento>> GetAllEventosByTemaAsync(string tema, bool includePalestrantes)
        {
            return await _eventoPersist.GetAllEventosByTemaAsync(tema, includePalestrantes);
        }

    }
}
