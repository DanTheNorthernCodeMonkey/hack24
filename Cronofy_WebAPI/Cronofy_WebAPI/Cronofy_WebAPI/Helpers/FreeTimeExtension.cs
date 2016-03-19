using System;
using System.Collections.Generic;
using System.Linq;

namespace Cronofy_WebAPI.Helpers
{
    public static class FreeTimeExtension
    {
        public static IEnumerable<int> GetFreeTime(DateTime dt1, DateTime dt2)
        {
            TimeSpan ts = dt2 - dt1;
            return Enumerable.Range(0, (int)ts.TotalHours).Select(i => dt1.AddHours(i).Hour);
        }
    }
}