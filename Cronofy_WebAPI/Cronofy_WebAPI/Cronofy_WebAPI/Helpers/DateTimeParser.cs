using System;
using System.Globalization;
using Cronofy;

namespace Cronofy_WebAPI.Helpers
{
    public static class DateTimeParser
    {
        public static Date Parse(string dateTimeString)
        {
            var dateTimeParsed = DateTime.ParseExact(dateTimeString, "yyyyMMddThhmmZ", CultureInfo.InvariantCulture);
            return new Date(dateTimeParsed.Year, dateTimeParsed.Month, dateTimeParsed.Day);
        }


        public static DateTime ParseToDateTime(string dateTimeString)
        {
            return DateTime.ParseExact(dateTimeString, "yyyyMMddThhmmZ", CultureInfo.InvariantCulture);
        }
    }
}