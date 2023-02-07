using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace smith_hannah_mission4.Models
{
    public class gradeCalcModel
    {
        //require input of number bewteen 0 and 100
        [Range(0, 100)]
        public string assignments { get; set; }
        [Range(0, 100)]
        public string project { get; set; }
        [Range(0, 100)]
        public string quizzes  { get; set; }
        [Range(0, 100)]
        public string midterm  { get; set; }
        [Range(0, 100)]
        public string final { get; set; }
        [Range(0, 100)]
        public string intex { get; set; }

    }
}
