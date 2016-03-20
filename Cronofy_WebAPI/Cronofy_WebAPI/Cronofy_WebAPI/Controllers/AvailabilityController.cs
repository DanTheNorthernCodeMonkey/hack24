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
using Cronofy_WebAPI.Logic;
using Cronofy_WebAPI.Models;

namespace Cronofy_WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/availability")]
    public class AvailabilityController : ApiController
    {
        private readonly IConfiguration _configuration;
        private readonly GetFreeBusyRequestBuilderFactory _getFreeBusyRequestBuilderFactory;

        public AvailabilityController(IConfiguration configuration, GetFreeBusyRequestBuilderFactory getFreeBusyRequestBuilderFactory)
        {
            _configuration = configuration;
            _getFreeBusyRequestBuilderFactory = getFreeBusyRequestBuilderFactory;
        }

        [Route(@"{startDate}/{endDate}/{duration}")]
        public HttpResponseMessage Get([FromUri]string startDate, [FromUri]string endDate, int duration)
        {
            var cronofy = new CronofyAccountClient(_configuration.AuthToken);
            var calendarId = cronofy.GetCalendars().Select(x => x.CalendarId).FirstOrDefault();

            var parsedStartDateString = DateTimeParser.Parse(startDate);
            var parsedEndDateString = DateTimeParser.Parse(endDate);

            var parsedStartDateTimeString = DateTimeParser.ParseToDateTime(startDate);
            var parsedEndDateTimeString = DateTimeParser.ParseToDateTime(endDate);

            var freeRequestBuilder = _getFreeBusyRequestBuilderFactory.GetFreeBusyRequestBuilder(parsedStartDateString,
                parsedEndDateString, calendarId, _configuration.TimeZoneId);

            List<FreeBusy> busySlots = new List<FreeBusy>();

            try
            {
                busySlots = cronofy.GetFreeBusy(freeRequestBuilder.Build()).ToList();
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }

            var freeSlots = new List<Slot>();
            int i = -1;
            while (parsedStartDateTimeString.AddMinutes(i*duration).AddMinutes(duration) < parsedEndDateTimeString)
            {
                var thisStart = parsedStartDateTimeString.AddMinutes(duration*(++i));
                var thisEnd = thisStart.AddMinutes(duration);

                if (!isBusy(thisStart, thisEnd, busySlots))
                {
                    freeSlots.Add(new Slot(){StartDate = thisStart, EndDate = thisEnd});
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, freeSlots); 
        }

        private static bool isBusy(DateTime start, DateTime end, List<FreeBusy> busySlots)
        {
            foreach (var time in busySlots)
            {
                if ((start > time.Start.DateTimeOffset.DateTime && start < time.End.DateTimeOffset.DateTime) || 
                    (end > time.Start.DateTimeOffset.DateTime && end < time.End.DateTimeOffset.DateTime))
                {
                    return true;
                }

            }
            return false;
        }
    }
}

