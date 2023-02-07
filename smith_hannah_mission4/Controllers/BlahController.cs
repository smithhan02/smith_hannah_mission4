using Microsoft.AspNetCore.Mvc;
using smith_hannah_mission4.Models;
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

        [HttpGet]
        public IActionResult gradeCalc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalc(gradeCalcModel model)
        {
            return View();
        }

    }
}
