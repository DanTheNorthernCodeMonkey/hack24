using Cronofy_WebAPI.Contracts;
using Cronofy_WebAPI.Logic;

[assembly: WebActivator.PostApplicationStartMethod(typeof(Cronofy_WebAPI.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace Cronofy_WebAPI.App_Start
{
    using System.Web.Http;
    using SimpleInjector;
    using SimpleInjector.Integration.WebApi;
    
    public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
            
            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
           
       
            container.Verify();
            
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
     
        private static void InitializeContainer(Container container)
        {

            // For instance:
             container.Register<IConfiguration, Configuration>();
            container.Register<GetFreeBusyRequestBuilderFactory>();
        }
    }
}