using Microsoft.EntityFrameworkCore;
using Proeventos.Domain;
using Proeventos.Domain.Contratos;
using Proeventos.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Persistence
{
    public class EventoPersist : IEventoPersist
    {
        private ProEventosContext _context;
        public EventoPersist(ProEventosContext context)
        {
            _context = context;
            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        public async Task<List<Evento>> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote).Include(e => e.RedeSocial);
            //
            if (includePalestrantes)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id);
            return await query.ToListAsync();
        }
        public async Task<Evento> GetAllEventosByIdAsync(int EventoId, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote).Include(e => e.RedeSocial);
            //
            if (includePalestrantes)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id).Where(e => e.Id == EventoId);
            return await query.FirstOrDefaultAsync();
        }
        public async Task<List<Evento>> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.Include(e => e.Lote).Include(e => e.RedeSocial);
            //
            if (includePalestrantes)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id).Where(e => e.Tema.ToLower().Contains(tema.ToLower()));
            return await query.ToListAsync();
        }
    }
}
