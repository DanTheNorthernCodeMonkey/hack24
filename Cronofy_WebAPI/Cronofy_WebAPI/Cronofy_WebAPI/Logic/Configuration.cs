using Cronofy_WebAPI.Contracts;

namespace Cronofy_WebAPI.Logic
{
    public class Configuration : IConfiguration
    {
        public Configuration()
        {
            AuthToken = System.Configuration.ConfigurationManager.AppSettings["authtoken"];
            TimeZoneId = System.Configuration.ConfigurationManager.AppSettings["timezoneid"];
        }

        public string AuthToken { get; set; }
        public string TimeZoneId { get; set; }
    }
}