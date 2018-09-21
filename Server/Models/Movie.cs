using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp2017.Server.Models
{
  public class MoviesResponse
  {
    public int results_size { get; set; }
    public IEnumerable<Movie> results { get; set; }

  }

  public class Blob
  {
    public string ProgramID { get; set; }
    public string OriginalTitle { get; set; }
    public string SpanishGuideTitle { get; set; }
    public string PortugueseGuideTitle { get; set; }
    public string EnglishLocalTitle { get; set; }
    public string SpanishSynopsis { get; set; }
    public string PortugueseSynopsis { get; set; }
    public string EnglishSynopsis { get; set; }
    public string SpanishTagLine { get; set; }
    public string SpanishGenre { get; set; }
  }

  public class Movie
  {
    public string id { get; set; }
    public string title { get; set; }
    public string description { get; set; }
    public string image_url { get; set; }
    public string last_update { get; set; }
    public Blob blob { get; set; }
  }
}
