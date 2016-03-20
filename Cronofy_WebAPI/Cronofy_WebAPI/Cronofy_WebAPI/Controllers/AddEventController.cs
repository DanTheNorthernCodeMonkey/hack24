using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Cronofy;
using Cronofy_WebAPI.Contracts;
using Cronofy_WebAPI.Helpers;

namespace Cronofy_WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/AddEvent")]
    public class AddEventController : ApiController
    {
        private readonly IConfiguration _configuration;

        public AddEventController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [Route(@"{startDate}/{endDate}/{description}/{summaryInfo}")]
        public HttpResponseMessage Post([FromUri]string startDate, [FromUri]string endDate, string description, string summaryInfo)
        {
            try
            {
                var cronofy = new CronofyAccountClient(_configuration.AuthToken);

                var calendars = cronofy.GetCalendars();

                var calendarId =
                    calendars.Where(x => x.Profile.ProviderName == "google").Select(x => x.CalendarId).First();

                var parsedStartDateString = DateTimeParser.Parse(startDate);
                var parsedEndDateString = DateTimeParser.Parse(endDate);

                var uniqueId = Guid.NewGuid();

                var eventBuilder = new UpsertEventRequestBuilder()
                    .EventId(uniqueId.ToString())
                    .Summary(summaryInfo)
                    .Description(description)
                    .Start(parsedStartDateString.Year, parsedStartDateString.Month, parsedStartDateString.Day,
                        parsedStartDateString.DateTime.Hour, parsedStartDateString.DateTime.Minute)
                    .End(parsedEndDateString.Year, parsedEndDateString.Month, parsedEndDateString.Day,
                        parsedEndDateString.DateTime.Hour, parsedEndDateString.DateTime.Minute);

                cronofy.UpsertEvent(calendarId, eventBuilder);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
