using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace jqueryNotes._5_ajax
{
    /// <summary>
    ///Data 的摘要描述
    /// </summary>
    public class Data : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            var result = new
            {
                name="John",
                age=24,
                title="Manager",
                joinDate = "2013/01/02"
            };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}