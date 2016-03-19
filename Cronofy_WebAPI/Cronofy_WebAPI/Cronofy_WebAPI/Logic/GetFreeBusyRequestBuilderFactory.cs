using Cronofy;

namespace Cronofy_WebAPI.Logic
{
    public class GetFreeBusyRequestBuilderFactory
    {
        public GetFreeBusyRequestBuilder GetFreeBusyRequestBuilder(Date from, Date to, string calendarId,
            string timeZoneId)
        {
            return new GetFreeBusyRequestBuilder().From(from.Year, from.Month, from.Day)
                .To(to.Year, to.Month, to.Day)
                .CalendarId(calendarId)
                .TimeZoneId(timeZoneId);
        }
    }
}