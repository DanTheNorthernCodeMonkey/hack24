//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using Cronofy_WebAPI.Helpers;

//namespace Cronofy_WebAPI.Controllers
//{
//    public class AddEventController : ApiController
//    {
//        [Route(@"daterange/{startDateString}/{endDateString}")]
//        public bool Post([FromUri]string startDateString, [FromUri]string endDateString)
//        {
//            var parsedStartDateString = DateTimeParser.Parse(startDateString);
//            var parsedEndDateString = DateTimeParser.Parse(endDateString);
//        }
//    }
//}
