using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Web.Mvc;

namespace JlueTaxSystemHuNanBS.Code
{
    public class ActionFilter : IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext context)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + @"\Log\";
            string fileFullPath = path + "Session.json";
            if (!System.IO.File.Exists(fileFullPath))
            {
                return;
            }
            string str = System.IO.File.ReadAllText(fileFullPath);
            JObject jo = JsonConvert.DeserializeObject<JObject>(str);
            context.HttpContext.Session["questionId"] = jo["questionId"].ToString();
            context.HttpContext.Session["userquestionId"] = jo["userquestionId"].ToString();
            context.HttpContext.Session["companyId"] = jo["companyId"].ToString();
            context.HttpContext.Session["classId"] = jo["classId"].ToString();
            context.HttpContext.Session["courseId"] = jo["courseId"].ToString();
            context.HttpContext.Session["userId"] = jo["userId"].ToString();
            context.HttpContext.Session["Name"] = jo["Name"].ToString();
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            //context.HttpContext.Response.WriteAsync($"{GetType().Name} out. \r\n");
        }
    }
}
