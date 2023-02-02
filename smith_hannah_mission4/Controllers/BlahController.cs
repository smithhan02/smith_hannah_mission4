using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smith_hannah_mission4.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
       
    }
}
