using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Cronofy;
using Cronofy_WebAPI.Contracts;

namespace Cronofy_WebAPI.Controllers
{
    [Route("api/getevents")]
    public class GetEventsController : ApiController
    {
        private readonly IConfiguration _configuration;

        public GetEventsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            List<Event> events;
            try
            {
                var cronofy = new CronofyAccountClient(_configuration.AuthToken);
                events = cronofy.GetEvents().ToList();
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }

            return Request.CreateResponse(HttpStatusCode.OK, events);
        }
    }
}
