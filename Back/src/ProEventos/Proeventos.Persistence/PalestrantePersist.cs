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
    public class PalestrantePersist : IPalestantePersist
    {
        private readonly ProEventosContext _context;
        public PalestrantePersist(ProEventosContext context)
        {
            _context = context;
        }


        public async Task<List<Palestrante>> GetAllPalestranteAsync(bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrante.Include(e => e.RedeSocial);
            //
            if (includeEventos)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id);
            return await query.ToListAsync();
        }
        public async Task<Palestrante> GetAllPalestranteByIdAsync(int PalestranteId, bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrante.Include(e => e.RedeSocial);
            //
            if (includeEventos)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id).Where(e => e.Id == PalestranteId);
            return await query.FirstOrDefaultAsync();
        }
        public async Task<List<Palestrante>> GetAllPalestranteByNomeAsync(string Nome, bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrante.Include(e => e.RedeSocial);
            //
            if (includeEventos)
            {
                query = query.Include(e => e.PalestranteEventos).ThenInclude(pe => pe.Palestrante);
            }
            //
            query = query.OrderBy(e => e.Id).Where(e => e.Nome.ToLower().Contains(Nome.ToLower()));
            return await query.ToListAsync();
        }
    }
}
