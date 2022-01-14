using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Domain.Contratos
{
   public interface IGeralPersist
    {
        void Add<T>(T Entity) where T : class;
        void Update<T>(T Entity) where T : class;
        void Detele<T>(T Entity) where T : class;
        void DeleteRange<T>(T[] Entity) where T : class;
        Task<bool> SaveChangesAsync();
    }
}
