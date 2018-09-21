using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Asp2017.Server.Models;
using AspCoreServer.Data;
using AspCoreServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AspCoreServer.Controllers
{
  [Route("api/[controller]")]
  public class MoviesController : Controller
  {

    [HttpGet]
    public async Task<IActionResult> Get()
    {

      using (var client = new HttpClient()) {
        try
        {
          client.BaseAddress = new Uri("http://mantenimiento.takeoffmedia.com");
          
          var response = await client.GetAsync($"/_hbofeed/movies.cshtml");
          response.EnsureSuccessStatusCode();

          var stringResult = await response.Content.ReadAsStringAsync();
          var movies = JsonConvert.DeserializeObject<MoviesResponse>(stringResult);
          return this.Ok(new
          {
            result_size = movies.results_size,
            result = movies.results
          });
        }
        catch (HttpRequestException httpRequestException)
        {
          return this.BadRequest($"Error getting data from Movies Api: {httpRequestException.Message}");
        }
      }
      
    }

  }
}
