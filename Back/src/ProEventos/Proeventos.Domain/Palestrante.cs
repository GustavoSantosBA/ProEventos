using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proeventos.Domain
{
    public class Palestrante
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }
        public string ImagemUrl { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public IEnumerable<RedeSocial> RedeSocial { get; set; }
        public IEnumerable<PalestranteEvento> PalestranteEventos { get; set; }

    }
}
