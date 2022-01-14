using Microsoft.EntityFrameworkCore;
using Proeventos.Domain;
using Proeventos.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Persistence
{
    public class ProeventosPersistence
    {

        private readonly ProEventosContext _context;
        public ProeventosPersistence(ProEventosContext context)
        {
            _context = context;
        }

        public void Add<T>(T Entity) where T : class
        {
            _context.Add(Entity);
        }
        public void DeleteRange<T>(T[] Entity) where T : class
        {
            _context.RemoveRange(Entity);
        }
        public void Detele<T>(T Entity) where T : class
        {
            _context.Remove(Entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
        public void Update<T>(T Entity) where T : class
        {
            _context.Update(Entity);
        }
    }
}
