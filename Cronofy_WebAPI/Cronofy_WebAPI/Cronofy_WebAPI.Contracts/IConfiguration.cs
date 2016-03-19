namespace Cronofy_WebAPI.Contracts
{
    public interface IConfiguration
    {
        string AuthToken { get; set; }
        string TimeZoneId { get; set; }
    }
}