using System.Collections.Generic;
using System.Web.Http;

namespace MVCAppWithAngular.Controllers
{
    public class AppsController : ApiController
    {
        App[] apps = new App[]
        {
            new App() { Id = 1, Name = "Super Doc v5000" },
            new App() { Id = 2, Name = "Epic App v20.8" },
            new App() { Id = 3, Name = "Fast CMS v1.0" },
        };

        public IEnumerable<App> Get()
        {
            System.Threading.Thread.Sleep(2000);
            return apps;
        }
    }

    public class App
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
