using System.Web.Optimization;

namespace BudgetForecastTool.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js", "~/Scripts/angular-route.js"));


            bundles.Add(new ScriptBundle("~/bundles/xedit").Include(
                      "~/Scripts/xeditable.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                     "~/Scripts/jquery-1.10.2.min.js"));


            //bundles.Add(new ScriptBundle("~/bundles/home").Include(
            //         "~/App_JS/ng-app/module.js", "~/App_JS/ng-app/services.js", "~/App_JS/ng-app/home.js"));

            bundles.Add(new ScriptBundle("~/bundles/home").Include("~/App_JS/ng-app/module.js", "~/App_JS/ng-app/base.js", "~/App_JS/ng-app/services.js", "~/App_JS/ng-app/home.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/Header-internal.css",
                     "~/Content/master.css",
                      "~/Content/common.css", "~/css/xeditable.css"));

            bundles.Add(new StyleBundle("~/Content/css1").Include("~/Content/master.css",
                    "~/Content/bootstrap.css",
                    "~/Content/site.css",
                    "~/Content/Header-internal.css",

                    "~/Content/common.css", "~/css/xeditable.css"));
            //bundles.Add(new StyleBundle("~/css/xeditable").Include(
            //         "~/css/xeditable.css"));
        }
    }
}